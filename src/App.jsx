import React from 'react';
import fetchProgress from 'fetch-progress';
import './App.css';


const languageCodes = [
'en-rAU',
'en-rGB',
'en-rIN',
'en-rCA',
'en-rXC',
'zh-rCN',
'zh-rTW',
'zh-rHK',
'cs',
'da',
'de',
'el',
'es',
'es-rUS',
'fr',
'it',
'ja',
'ko',
'nb',
'nl',
'pl',
'pt',
'pt-rPT',
'ru',
'sv',
'tr',
'af',
'am',
'ar',
'az',
'bg',
'bn',
'ca',
'et',
'eu',
'fa',
'fi',
'fr-rCA',
'gl',
'gu',
'hi',
'hr',
'hu',
'hy',
'in',
'is',
'iw',
'ka',
'kk',
'km',
'kn',
'ky',
'lo',
'lt',
'lv',
'mk',
'ml',
'mn',
'mr',
'ms',
'my',
'ne',
'pa',
'ro',
'si',
'sk',
'sl',
'sq',
'sr',
'sw',
'ta',
'te',
'th',
'tl',
'uk',
'ur',
'uz',
'vi',
'zu',
'b+sr+Latn',
'be',
'bs',
'pt-rBR',
'af-large',
'am-large',
'ar-large',
'be-large',
'bg-large',
'ca-large',
'cs-large',
'da-large',
'de-large',
'el-large',
'en-rGB-large',
'es-large',
'es-rUS-large',
'et-large',
'fa-large',
'fi-large',
'fr-large',
'hi-large',
'hr-large',
'hu-large',
'in-large',
'it-large',
'iw-large',
'ja-large',
'ko-large',
'lt-large',
'lv-large',
'ms-large',
'nb-large',
'nl-large',
'pl-large',
'pt-large',
'pt-rPT-large',
'ro-large',
'ru-large',
'sk-large',
'sl-large',
'sr-large',
'sv-large',
'sw-large',
'th-large',
'tl-large',
'tr-large',
'uk-large',
'vi-large',
'zh-rCN-large',
'zh-rTW-large',
'zu-large',
'mcc246-af',
'mcc246-am',
'mcc246-ar',
'mcc246-az',
'mcc246-b+sr+Latn',
'mcc246-be',
'mcc246-bg',
'mcc246-bn',
'mcc246-bs',
'mcc246-ca',
'mcc246-cs',
'mcc246-da',
'mcc246-de',
'mcc246-el',
'mcc246-en-rAU',
'mcc246-en-rCA',
'mcc246-en-rGB',
'mcc246-en-rIN',
'mcc246-en-rXC',
'mcc246-es',
'mcc246-es-rUS',
'mcc246-et',
'mcc246-eu',
'mcc246-fa',
'mcc246-fi',
'mcc246-fr',
'mcc246-fr-rCA',
'mcc246-gl',
'mcc246-gu',
'mcc246-hi',
'mcc246-hr',
'mcc246-hu',
'mcc246-hy',
'mcc246-in',
'mcc246-is',
'mcc246-it',
'mcc246-iw',
'mcc246-ja',
'mcc246-ka',
'mcc246-kk',
'mcc246-km',
'mcc246-kn',
'mcc246-ko',
'mcc246-ky',
'mcc246-lo',
'mcc246-lt',
'mcc246-lv',
'mcc246-mk',
'mcc246-ml',
'mcc246-mn',
'mcc246-mr',
'mcc246-ms',
'mcc246-my',
'mcc246-nb',
'mcc246-ne',
'mcc246-nl',
'mcc246-pa',
'mcc246-pl',
'mcc246-pt',
'mcc246-pt-rPT',
'mcc246-ro',
'mcc246-ru',
'mcc246-si',
'mcc246-sk',
'mcc246-sl',
'mcc246-sq',
'mcc246-sr',
'mcc246-sv',
'mcc246-sw',
'mcc246-ta',
'mcc246-te',
'mcc246-th',
'mcc246-tl',
'mcc246-tr',
'mcc246-uk',
'mcc246-ur',
'mcc246-uz',
'mcc246-vi',
'mcc246-zh-rCN',
'mcc246-zh-rHK',
'mcc246-zh-rTW',
'mcc246-zu',
'no',
'mcc262-mnc01-af',
'mcc262-mnc01-am',
'mcc262-mnc01-ar',
'mcc262-mnc01-az',
'mcc262-mnc01-b+sr+Latn',
'mcc262-mnc01-be',
'mcc262-mnc01-bg',
'mcc262-mnc01-bn',
'mcc262-mnc01-bs',
'mcc262-mnc01-ca',
'mcc262-mnc01-cs',
'mcc262-mnc01-da',
'mcc262-mnc01-de',
'mcc262-mnc01-el',
'mcc262-mnc01-en-rAU',
'mcc262-mnc01-en-rGB',
'mcc262-mnc01-en-rIN',
'mcc262-mnc01-es',
'mcc262-mnc01-es-rUS',
'mcc262-mnc01-et',
'mcc262-mnc01-eu',
'mcc262-mnc01-fa',
'mcc262-mnc01-fi',
'mcc262-mnc01-fr',
'mcc262-mnc01-fr-rCA',
'mcc262-mnc01-gl',
'mcc262-mnc01-gu',
'mcc262-mnc01-hi',
'mcc262-mnc01-hr',
'mcc262-mnc01-hu',
'mcc262-mnc01-hy',
'mcc262-mnc01-in',
'mcc262-mnc01-is',
'mcc262-mnc01-it',
'mcc262-mnc01-iw',
'mcc262-mnc01-ja',
'mcc262-mnc01-ka',
'mcc262-mnc01-kk',
'mcc262-mnc01-km',
'mcc262-mnc01-kn',
'mcc262-mnc01-ko',
'mcc262-mnc01-ky',
'mcc262-mnc01-lo',
'mcc262-mnc01-lt',
'mcc262-mnc01-lv',
'mcc262-mnc01-mk',
'mcc262-mnc01-ml',
'mcc262-mnc01-mn',
'mcc262-mnc01-mr',
'mcc262-mnc01-ms',
'mcc262-mnc01-my',
'mcc262-mnc01-nb',
'mcc262-mnc01-ne',
'mcc262-mnc01-nl',
'mcc262-mnc01-no',
'mcc262-mnc01-pa',
'mcc262-mnc01-pl',
'mcc262-mnc01-pt',
'mcc262-mnc01-pt-rBR',
'mcc262-mnc01-pt-rPT',
'mcc262-mnc01-ro',
'mcc262-mnc01-ru',
'mcc262-mnc01-si',
'mcc262-mnc01-sk',
'mcc262-mnc01-sl',
'mcc262-mnc01-sq',
'mcc262-mnc01-sr',
'mcc262-mnc01-sv',
'mcc262-mnc01-sw',
'mcc262-mnc01-ta',
'mcc262-mnc01-te',
'mcc262-mnc01-th',
'mcc262-mnc01-tl',
'mcc262-mnc01-tr',
'mcc262-mnc01-uk',
'mcc262-mnc01-ur',
'mcc262-mnc01-uz',
'mcc262-mnc01-vi',
'mcc262-mnc01-zh-rCN',
'mcc262-mnc01-zh-rHK',
'mcc262-mnc01-zh-rTW',
'mcc262-mnc01-zu',
'rm',
'az-rAZ',
'et-rEE',
'hy-rAM',
'ka-rGE',
'km-rKH',
'lo-rLA',
'mn-rMN',
'ms-rMY',
'ne-rNP',
'si-rLK',
'af-land',
'am-land',
'ar-land',
'bg-land',
'ca-land',
'cs-land',
'da-land',
'de-land',
'el-land',
'en-rGB-land',
'es-land',
'es-rUS-land',
'fa-land',
'fi-land',
'fr-land',
'hr-land',
'hu-land',
'in-land',
'it-land',
'iw-land',
'ja-land',
'ko-land',
'lt-land',
'lv-land',
'ms-land',
'nb-land',
'nl-land',
'pl-land',
'pt-land',
'pt-rPT-land',
'rm-land',
'ro-land',
'ru-land',
'sk-land',
'sl-land',
'sr-land',
'sv-land',
'sw-land',
'th-land',
'tl-land',
'tr-land',
'uk-land',
'vi-land',
'zh-rCN-land',
'zh-rTW-land',
'zu-land',
'af-keysexposed',
'af-keyshidden',
'am-keysexposed',
'am-keyshidden',
'ar-keysexposed',
'ar-keyshidden',
'b+sr+Latn-keysexposed',
'b+sr+Latn-keyshidden',
'be-keysexposed',
'be-keyshidden',
'bg-keysexposed',
'bg-keyshidden',
'bn-rWB-keysexposed',
'bn-rWB-keyshidden',
'bs-keysexposed',
'bs-keyshidden',
'ca-keysexposed',
'ca-keyshidden',
'cs-keysexposed',
'cs-keyshidden',
'da-keysexposed',
'da-keyshidden',
'de-keysexposed',
'de-keyshidden',
'el-keysexposed',
'el-keyshidden',
'en-rAU-keysexposed',
'en-rAU-keyshidden',
'en-rCA-keysexposed',
'en-rCA-keyshidden',
'en-rGB-keysexposed',
'en-rGB-keyshidden',
'en-rIN-keysexposed',
'en-rIN-keyshidden',
'es-keysexposed',
'es-keyshidden',
'es-rUS-keysexposed',
'es-rUS-keyshidden',
'et-keysexposed',
'et-keyshidden',
'fa-keysexposed',
'fa-keyshidden',
'fi-keysexposed',
'fi-keyshidden',
'fr-keysexposed',
'fr-keyshidden',
'fr-rCA-keysexposed',
'fr-rCA-keyshidden',
'hi-keysexposed',
'hi-keyshidden',
'hr-keysexposed',
'hr-keyshidden',
'hu-keysexposed',
'hu-keyshidden',
'in-keysexposed',
'in-keyshidden',
'it-keysexposed',
'it-keyshidden',
'iw-keysexposed',
'iw-keyshidden',
'ja-keysexposed',
'ja-keyshidden',
'ko-keysexposed',
'ko-keyshidden',
'lt-keysexposed',
'lt-keyshidden',
'lv-keysexposed',
'lv-keyshidden',
'ms-keysexposed',
'ms-keyshidden',
'nb-keysexposed',
'nb-keyshidden',
'nl-keysexposed',
'nl-keyshidden',
'pl-keysexposed',
'pl-keyshidden',
'pt-keysexposed',
'pt-keyshidden',
'pt-rPT-keysexposed',
'pt-rPT-keyshidden',
'rm-keysexposed',
'rm-keyshidden',
'ro-keysexposed',
'ro-keyshidden',
'ru-keysexposed',
'ru-keyshidden',
'sk-keysexposed',
'sk-keyshidden',
'sl-keysexposed',
'sl-keyshidden',
'sr-keysexposed',
'sr-keyshidden',
'sv-keysexposed',
'sv-keyshidden',
'sw-keysexposed',
'sw-keyshidden',
'th-keysexposed',
'th-keyshidden',
'tl-keysexposed',
'tl-keyshidden',
'tr-keysexposed',
'tr-keyshidden',
'uk-keysexposed',
'uk-keyshidden',
'vi-keysexposed',
'vi-keyshidden',
'zh-rCN-keysexposed',
'zh-rCN-keyshidden',
'zh-rHK-keysexposed',
'zh-rHK-keyshidden',
'zh-rTW-keysexposed',
'zh-rTW-keyshidden',
'zu-keysexposed',
'zu-keyshidden',
'af-television',
'af-watch',
'am-television',
'am-watch',
'ar-television',
'ar-watch',
'az-television',
'az-watch',
'b+sr+Latn-television',
'b+sr+Latn-watch',
'be-television',
'be-watch',
'bg-television',
'bg-watch',
'bn-television',
'bn-watch',
'bs-television',
'bs-watch',
'ca-television',
'ca-watch',
'cs-television',
'cs-watch',
'da-television',
'da-watch',
'de-television',
'de-watch',
'el-television',
'el-watch',
'en-rAU-television',
'en-rAU-watch',
'en-rCA-television',
'en-rCA-watch',
'en-rGB-television',
'en-rGB-watch',
'en-rIN-television',
'en-rIN-watch',
'en-rXC-television',
'en-rXC-watch',
'es-rUS-television',
'es-rUS-watch',
'es-television',
'es-watch',
'et-television',
'et-watch',
'eu-television',
'eu-watch',
'fa-television',
'fa-watch',
'fi-television',
'fi-watch',
'fr-rCA-television',
'fr-rCA-watch',
'fr-television',
'fr-watch',
'gl-television',
'gl-watch',
'gu-television',
'gu-watch',
'hi-television',
'hi-watch',
'hr-television',
'hr-watch',
'hu-television',
'hu-watch',
'hy-television',
'hy-watch',
'in-television',
'in-watch',
'is-television',
'is-watch',
'it-television',
'it-watch',
'iw-television',
'iw-watch',
'ja-television',
'ja-watch',
'ka-television',
'ka-watch',
'kk-television',
'kk-watch',
'km-television',
'km-watch',
'kn-television',
'kn-watch',
'ko-television',
'ko-watch',
'ky-television',
'ky-watch',
'lo-television',
'lo-watch',
'lt-television',
'lt-watch',
'lv-television',
'lv-watch',
'mk-television',
'mk-watch',
'ml-television',
'ml-watch',
'mn-television',
'mn-watch',
'mr-television',
'mr-watch',
'ms-television',
'ms-watch',
'my-television',
'my-watch',
'nb-television',
'nb-watch',
'ne-television',
'ne-watch',
'nl-television',
'nl-watch',
'pa-television',
'pa-watch',
'pl-television',
'pl-watch',
'pt-rBR-television',
'pt-rBR-watch',
'pt-rPT-television',
'pt-rPT-watch',
'pt-television',
'pt-watch',
'ro-television',
'ro-watch',
'ru-television',
'ru-watch',
'si-television',
'si-watch',
'sk-television',
'sk-watch',
'sl-television',
'sl-watch',
'sq-television',
'sq-watch',
'sr-television',
'sr-watch',
'sv-television',
'sv-watch',
'sw-television',
'sw-watch',
'ta-television',
'ta-watch',
'te-television',
'te-watch',
'th-television',
'th-watch',
'tl-television',
'tl-watch',
'tr-television',
'tr-watch',
'uk-television',
'uk-watch',
'ur-television',
'ur-watch',
'uz-television',
'uz-watch',
'vi-television',
'vi-watch',
'zh-rCN-television',
'zh-rCN-watch',
'zh-rHK-television',
'zh-rHK-watch',
'zh-rTW-television',
'zh-rTW-watch',
'zu-television',
'zu-watch',
'bn-rBD',
'eu-rES',
'gl-rES',
'gu-rIN',
'is-rIS',
'kk-rKZ',
'kn-rIN',
'ky-rKG',
'mk-rMK',
'ml-rIN',
'mr-rIN',
'my-rMM',
'pa-rIN',
'sq-rAL',
'ta-rIN',
'te-rIN',
'ur-rPK',
'uz-rUZ',
'af-sw600dp',
'am-sw600dp',
'ar-sw600dp',
'az-sw600dp',
'bg-sw600dp',
'bn-sw600dp',
'ca-sw600dp',
'cs-sw600dp',
'da-sw600dp',
'de-sw600dp',
'el-sw600dp',
'en-rAU-sw600dp',
'en-rGB-sw600dp',
'en-rIN-sw600dp',
'es-rUS-sw600dp',
'es-sw600dp',
'et-sw600dp',
'eu-sw600dp',
'fa-sw600dp',
'fi-sw600dp',
'fr-rCA-sw600dp',
'fr-sw600dp',
'gl-sw600dp',
'gu-sw600dp',
'hi-sw600dp',
'hr-sw600dp',
'hu-sw600dp',
'hy-sw600dp',
'in-sw600dp',
'is-sw600dp',
'it-sw600dp',
'iw-sw600dp',
'ja-sw600dp',
'ka-sw600dp',
'kk-sw600dp',
'km-sw600dp',
'kn-sw600dp',
'ko-sw600dp',
'ky-sw600dp',
'lo-sw600dp',
'lt-sw600dp',
'lv-sw600dp',
'mk-sw600dp',
'ml-sw600dp',
'mn-sw600dp',
'mr-sw600dp',
'ms-sw600dp',
'my-sw600dp',
'nb-sw600dp',
'ne-sw600dp',
'nl-sw600dp',
'pl-sw600dp',
'pt-rPT-sw600dp',
'pt-sw600dp',
'ro-sw600dp',
'ru-sw600dp',
'si-sw600dp',
'sk-sw600dp',
'sl-sw600dp',
'sr-sw600dp',
'sv-sw600dp',
'sw-sw600dp',
'ta-sw600dp',
'te-sw600dp',
'th-sw600dp',
'tl-sw600dp',
'tr-sw600dp',
'uk-sw600dp',
'ur-sw600dp',
'uz-sw600dp',
'vi-sw600dp',
'zh-rCN-sw600dp',
'zh-rHK-sw600dp',
'zh-rTW-sw600dp',
'zu-sw600dp'];

const renderSize = 5*4;

const convToMB = (numInB) => {
  var numInMB = Number.parseFloat(numInB/1024/1024).toFixed(3);
  return numInMB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "MB";
}


class Popup extends React.PureComponent{
  render() {
    return (
      <div className='popup' onClick={this.props.closePopup}>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <div>
            <h3>使用說明</h3>
            <p>
            先選擇想要搜索的語言，預設為台灣繁體中文 zh-rTW，再輸入搜索關鍵字進行搜索。<br /><br />
            關鍵詞搜索時只會顯示那種語言的預覽，加上5種英文變體和3種中文變體的預覽。<br /><br />
            複製MsgID後用MsgID重新搜索會出現所有語言的預覽。<br /><br />
            </p>
          </div>
        <button onClick={this.props.closePopup}>CLOSE</button>
        </div>
      </div>
    );
  }
}

class SearchBar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      showPopup: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onSearchBarChange(e);
    //Pass to App to deal with the change
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const searchValue = this.props.searchValue;
    const filterLanguageCode = this.props.filterLanguageCode;
    return (
      <div className="search-bar">
        <h3>Android Translations XML search</h3>
        <label  className="search-field">
         Keyword or MsgID：
          <input name="searchValue" type="text" value={searchValue} onChange={this.handleChange} />
        </label>

        <label  className="language-code-select">
          Choose LanguageCode：
          <select name="languageCodeValue" value={filterLanguageCode} onChange={this.handleChange}>
            {languageCodes.map((languageCode => {
              return (
                <option key={languageCode} value={languageCode}>{languageCode}</option>
              );
            }))}
          </select>
        </label>

        <button onClick={this.togglePopup.bind(this)}>Help</button>

        {this.state.showPopup ? 
          (<Popup
            text='Help'
            closePopup={this.togglePopup.bind(this)}
          />)
          : null
        }
      </div>
    );
  }
}

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render (){

    let {cardTitle, MsgName, MsgID, Default, translationAsArray, AppName} = this.props;
    return (
      <li className="card">
        <div className="card-content">
          <h2>{cardTitle}</h2>
          <div>
            <div className="MsgName">MsgName: {MsgName}</div>
            <div className="MsgID">MsgID: {MsgID}</div>
            {Default != ""&&(<div className="Default">DefaultName: {Default}</div>)}
            <table className="Translations">
              <tbody>
                {translationAsArray.map( translation => {
                  return (
                    <tr key={translation[0]}><td>{translation[0]}</td><td>{translation[1]}</td></tr>
                  );
                })}
              </tbody>
            </table>
            <div className="AppName">AppName: {AppName}</div>
          </div>
        </div>
      </li>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.scrollContainer = React.createRef()

    this.state = {
      fetchingError: null,
      isFetched: false,

      filterlanguageCode: "zh-rTW",
      searchValue: "你好",

      isResultLoaded: false,
      isResultLoading: true,
      progress:
        {
           total: 0,
           transferred: 0,
           speed: 0,
           eta: 0,
           percentage: 0,
           remaining: 0
        },
      
      // renderRangeL: -1*renderSize,
      renderRangeL: 0,
      renderRangeH: renderSize,

    };

    this.items = [];
    this.toBeRendered = null;
    this.totalNumOfItemDisplayed = null;

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.generateToBeRendered = this.generateToBeRendered.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    // this.updateRenderRange = this.updateRenderRange.bind(this);
  } 


  componentDidMount() {
    //Fetching Data
    {
      const self = this; // Provide "this" binding, from https://www.npmjs.com/package/fetch-progress
      fetch("./androidMsgs.json")
      .then(
        fetchProgress({
          onProgress(progress) {
            console.log(progress);
            self.setState({ progress });
          },
          onError(err) {
            console.log(err);
          },
        })
      )
      .then(res => res.json())
      .then(
        (result) => {
          let items = [];
          for (const [key, value] of Object.entries(result)) {
            items.push([key,value]);
          }
          this.items = items;
          this.setState({
            isFetched: true
          });
          this.generateToBeRendered();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isFetched: true,
            error
          });
        }
      );
    };

    //Add event listener
    window.addEventListener('scroll', this.handleScroll, {passive: true});

  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleSearchBarChange(e){
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "searchValue":
        this.setState((prevState, prevProp) => {
          return {
            searchValue: value,
            isResultLoaded: !prevState,
            isResultLoading: true,
            renderRangeL: 0,
            renderRangeH: renderSize,
          };
        }, () => {
          console.log("Tried calling generateToBeRendered");
          setTimeout(this.generateToBeRendered,1);
          // Use setTimeout to make sure generateToBeRendered happens after 
          // everything in the queued messages in Javascript Event Loop 
          // are completed.
          // This make sure result are rendered right after searchbar changes value
        });
        break;

      case "languageCodeValue":
        this.setState((prevState, prevProp) => {
          return {
            filterlanguageCode: value,
            isResultLoaded: !prevState,
            isResultLoading: true,
            renderRangeL: 0,
            renderRangeH: renderSize,
          };
        }, () => {
          console.log("Tried calling generateToBeRendered");
          setTimeout(this.generateToBeRendered,1);
        });
        break;
      default:
        break;
    }
  }

  handleScroll = (e) => {
    if(this.scrollContainer.current.getBoundingClientRect().bottom - 20 <= window.innerHeight){
      // Add  20 to offset for the 0.5em margin 
      console.log(`BOTTOM`);
      this.updateRenderRange(1);
    }
  }



  generateToBeRendered = async () => {
    //async to prevent from blocking, actually really fast

    this.setState((prevState) => {

        let numOfItemDisplayed = 0;
        const items = this.items;
        const filterLanguageCode = prevState.filterlanguageCode;
        const searchValue = prevState.searchValue;
        console.log(`generateToBeRendered Start, ${numOfItemDisplayed}, ${searchValue}, ${filterLanguageCode}`);

        let cards = [];
        items.map(val => {
          //Convert item to cards

          const [MsgID, {AppName, MsgName, Default, Translations}] = val;
          //deconstruction



          if(/^\d+$/.test(searchValue) && (searchValue+"").length>16 && MsgID == searchValue){
            // In the case of MsgID (is number && is longer than 16 digit && MsgID matching)
            numOfItemDisplayed += 1;

            let translationAsArray = [];
            for (const [key, value] of Object.entries(Translations)) {
              translationAsArray.push([key,value]);
            }

            cards.push(
              <Card key={MsgID} MsgID={MsgID} cardTitle={MsgID} MsgName={MsgName} Default={Default} translationAsArray={translationAsArray} AppName={AppName}></Card>
            );

          }else if(searchValue.trim().length > 0 && Translations[filterLanguageCode] && Translations[filterLanguageCode].indexOf(searchValue) >= 0){
            // In the case of normal search (not empty search && language code exit in current item && translation contains search value && total number < 2000)
            numOfItemDisplayed += 1;
            
            let translationAsArray = [
              ["en-rAU",Translations['en-rAU']],
              ["en-rGB",Translations['en-rGB']],
              ["en-rIN",Translations['en-rIN']],
              ["en-rCA",Translations['en-rCA']],
              ["en-rXC",Translations['en-rXC']],
              ["zh-rCN",Translations['zh-rCN']],
              ["zh-rTW",Translations['zh-rTW']],
              ["zh-rHK",Translations['zh-rHK']]
            ];

            if(numOfItemDisplayed <= prevState.renderRangeH ){
              // if(numOfItemDisplayed > prevState.renderRangeL && numOfItemDisplayed <= prevState.renderRangeH ){
              cards.push(
                <Card key={MsgID} MsgID={MsgID} cardTitle={Translations[filterLanguageCode]} MsgName={MsgName} Default={Default} translationAsArray={translationAsArray} AppName={AppName}></Card>
              );
            }

          }
        })
        
        let toBeRendered = (
          <ul className="list-view cards">
              {cards}
            <div className="num-of-item-displayed">{numOfItemDisplayed}個結果</div>
          </ul>
        );

        console.log("generateToBeRendered End");
        
      if(numOfItemDisplayed > 0){
        //prevent update of UI when typing, otherwise page will go blank
        this.totalNumOfItemDisplayed = numOfItemDisplayed;
        this.toBeRendered = toBeRendered;
      }
      return {
        isResultLoaded: true,
        isResultLoading: false
      };
    })
  }


  updateRenderRange = (direction = 1) => {
    this.setState((prevState) => {
      // let newRangeL = prevState.renderRangeL + direction*renderSize, 
      // let newRangeL = prevState.renderRangeL, 
      let newRangeH = prevState.renderRangeH + direction*renderSize;
      if(newRangeH > this.totalNumOfItemDisplayed){
        // if(newRangeL<0 || newRangeH > this.totalNumOfItemDisplayed){
        console.log( `DISQUALIFIED`);
          return ({})
      }
      console.log( `TRIGGERED`);
      return ({
        // renderRangeL: newRangeL,
        renderRangeH: newRangeH
      });
    });
    this.generateToBeRendered();
    return;
  }

  render() {   
    const { fetchingError, isFetched } = this.state;
    if (fetchingError) {
      // fecthing error
      return <div>Error: {fetchingError.message}</div>;
    } else if (!isFetched) {
      // fetching...
      return (
      <div className="loading-text">
        <div>這台設備第一次使用，</div>
        <div>下載詞典中({ convToMB(this.state.progress.transferred)}/{ convToMB(63493050) })</div>
        <div>預計時間：{ Math.round( (63493050-this.state.progress.transferred)/this.state.progress.speed )}s</div>
        <div>瀏覽器緩存後刷新也毋須重複下載。</div>
        <h3>使用說明</h3>
        <p>
        先選擇想要搜索的語言，預設為台灣繁體中文 zh-rTW，再輸入搜索關鍵字進行搜索。<br /><br />
        關鍵詞搜索時只會顯示那種語言的預覽，加上5種英文變體和3種中文變體的預覽。<br /><br />
        複製MsgID後用MsgID重新搜索會出現所有語言的預覽。<br /><br />
        </p>
      </div>
      );
    }

    // fetched.
    return (
      <div className="App">
        <SearchBar onSearchBarChange={this.handleSearchBarChange}  filterLanguageCode={this.state.filterlanguageCode} searchValue={this.state.searchValue}></SearchBar>
        {this.state.isResultLoading && 
        (
          <div className="popup">
            <div className="popup_inner">
              瀏覽器渲染中，請稍候...<br /><br />
            </div>
          </div>
        )}
        <div ref={this.scrollContainer}>
          {this.toBeRendered}
        </div>
      </div>
    );
    
  }
}



export default App
