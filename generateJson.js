const fs = require("fs");
const path = require( "path" );
const parser = require( "fast-xml-parser" );
var ProgressBar = require('progress');


/*
=========== USER CONFIGURATION ============
*/
const CONFIGURATION = {
    targetDirectory: "",
};

/*
=================== END ===================
*/


const xmlParseOptions = {
    attributeNamePrefix : "",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "text",
    ignoreAttributes : false,
    ignoreNameSpace : true,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : true,
    // trimValues: true,
    // cdataTagName: "__cdata", //default is 'false'
    // cdataPositionChar: "\\c",
    // parseTrueNumberOnly: false,
    // arrayMode: false, //"strict"
    // attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    // tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};


let main = async () => {
    console.log(`
WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
COME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WE
E WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCO
© MANGLE KUO 2021                                      SEE GITHUB PAGE FOR LICENSE INFO

Generating androidMsgs2.json, warming up...`);
    let beginTime = new Date().getTime();
    let targetDirectory = CONFIGURATION.targetDirectory == ""?path.resolve():CONFIGURATION.targetDirectory;
    try {
        let listOfXML = await getListOfXMLFrom(targetDirectory);

        console.log(`
Found ${listOfXML.length} xml files with matching criteria, begin collecting entries.`);
    
        let allXMLdata = await getAllData(listOfXML);
        
        let transposedData = transposeData(allXMLdata);

        fs.writeFileSync(path.join(path.resolve(),'androidMsgs2.json'), JSON.stringify(transposedData, '', 2), function (err) {
            if (err) throw err;
        });

        console.log(`
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!! COPY THE ABOVE AND REPLACE "languageCodes" IN App.jsx !!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

${path.join(path.resolve(),'androidMsgs2.json')} succesfully generated. Thanks for using my code.
Remember to change the file name to androidMsgs.json, which is what the React app look for.

TIME USED: ${(new Date().getTime()-beginTime)/1000}s; NUMBER OF ENTRIES: ${allXMLdata.length}; NUMBER OF MSGS: ${Object.keys(transposedData).length}
`);
    } catch (err) {   
        if (err) console.log(err);
    }
};

let getListOfXMLFrom = async (targetDirectory) => {
    var listOfXML = [];

    let getAllFileIn = async (Directory) => {
        fs.readdirSync(Directory).forEach(async (File) => {
            if((/(^|\/)\.[^\/\.]/g).test(File)){
                // ignore all the hidden files
                return true;
            }

            let Absolute = path.join(Directory, File);
            if (fs.statSync(Absolute).isDirectory()) {
                // Path is directory, go a level deeper
                return getAllFileIn(Absolute);
            } else {
                // Path is file, check if the path matches the desired pattern
                let ext = path.extname(File).toLowerCase();
                let V = path.sep;
                // The V is for cross platform compatibility, path.sep is "/" on Linux, "\" on Windows
                if(ext == ".xml" && Absolute.indexOf(`${V}res${V}values`) >= 0 && Absolute.indexOf(`${V}strings.xml`) >= 0){
                    let criteria = new RegExp(`\\/[A-z,0-9,\\-,\\s,\\_]+(\\${V}res\\${V}values)`,"g");
                    
                    let appName = Absolute.match(criteria)[0].replace(`${V}res${V}values`,"").slice(1);
                    let langCode = Absolute.slice(Absolute.indexOf(`${V}values`),Absolute.indexOf(`${V}strings.xml`)).replace(`${V}values`,"").replace("-","");
                    
                    listOfXML.push([appName,langCode,Absolute]);
                    // console.log(Absolute);
                }
            }
        });
        return true;
    }

    await getAllFileIn(targetDirectory);
    return listOfXML;

}

let getDataOutofXML = (appName,langCode,xmlPath) => {
    let MsgInfo = [];
    let data = fs.readFileSync(xmlPath);
    var jsonObg = parser.parse(data.toString(),xmlParseOptions,true);
    //"App Name, Language Code, MsgID, MsgName, Text";
    if(jsonObg.resources && jsonObg.resources.string && typeof jsonObg.resources.string == typeof [] && jsonObg.resources.string.length > 0){
        jsonObg.resources.string.map((val,idx) => {
            let MsgInfoLine = [appName,langCode,val.attr.msgid,val.attr.name,val.text,xmlPath];
            MsgInfo.push(MsgInfoLine);
            // console.log(MsgInfoLine);
        });
    }

    // console.log(`MsgInfo Length: ${MsgInfo.length}`);
    return MsgInfo;
}

let getAllData = async (listOfXML) => {
    let allData = [];

    console.log();
    var bar = new ProgressBar(':etas left [:bar]:percent  Collected from :current xml files. Total :total files. ', {
      complete: '>',
      incomplete: '=',
      width: 50,
      total: listOfXML.length
    });

    await listOfXML.forEach(async (el) => {
        let [appName,langCode,xmlPath] = el;
        let addedData = getDataOutofXML(appName,langCode,xmlPath);
        // console.log(`${appName}|${langCode}|${xmlPath}`);
        allData = [...allData,...addedData];
        bar.tick(1);
    });

    return await allData;

}


let transposeData = (allXMLdata) => {

    let allMsgs = {};
    // {
    //     MsgID: {
    //         AppName: "",
    //         MsgName: "",
    //         Default: "",
    //         Translations: {
    //             LanguageCode: "",
    //             LanguageCode: "",
    //         }
    //     },
    //     MsgID: {},
    //     MsgID: {}
    // }
    let noLang = [];
    // App Name, Language Code, MsgID, MsgName, Text, XMLPATH;
    let langCodes = [];
    

    let valid = 0;

    console.log();
    var bar = new ProgressBar(':etas left [:bar]:percent  Checked :current entries. Total :total entries. Found :valid valid entries.', {
      complete: '>',
      incomplete: '=',
      width: 50,
      total: allXMLdata.length
    });

    for (let i = 0; i < allXMLdata.length; i++) {
        let [AppName, LanguageCode, MsgID, MsgName, Text, XMLPATH] = allXMLdata[i]; 
        if(MsgID != undefined && MsgID != "undefined" && MsgID != "" && AppName != "res"){
            if(!allMsgs[MsgID]){
                allMsgs[MsgID] = {
                    AppName: AppName,
                    MsgName: MsgName,
                    Default: LanguageCode=="Default"?Text:"",
                    Translations: LanguageCode!="Default"?{
                        [LanguageCode]: Text
                    }:{}
                };
            }else{
                if(LanguageCode=="Default"){
                    allMsgs[MsgID].Default = Text;
                }else{
                    allMsgs[MsgID]["Translations"][LanguageCode] = Text;
                }
            }
            if(!langCodes.includes(LanguageCode)){langCodes.push(LanguageCode);}
            valid += 1;

        }else{
            noLang.push([AppName, LanguageCode, MsgID, MsgName, Text, XMLPATH]);
        }
        bar.tick(1,{'valid':valid});
    }

    console.log(`
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! COPY THE FOLLOWING AND REPLACE "languageCodes" IN App.jsx !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const languageCodes = [
    '${langCodes.join(`'
    '`)}'
];`);

    // For debug, when you want to see ones that are not valid.
    // fs.writeFileSync(path.join(path.resolve(),'noLang.json'), JSON.stringify(noLang, '', 2), function (err) {
    //     if (err) throw err;
    // });
    return allMsgs;

}

main();

