import React from 'react';
import { IntlProvider } from 'react-intl';
import IntlApp from './IntlApp';

// import messages according to your folder structure
import enGBMessages from './locales/en-GB.json';
import zhCNMessages from './locales/zh-CN.json';
import zhHKMessages from './locales/zh-HK.json';
import zhTWMessages from './locales/zh-TW.json';

const messages = {
  'en-GB': enGBMessages,
  'zh-CN': zhCNMessages,
  'zh-HK': zhHKMessages,
  'zh-TW': zhTWMessages
};

export default function LocalizationWrapper({ children }) {
  // get the language code from navigator, you can update this according to your needs
  let language = navigator.language;
    // Check if the language from browser is in your messages object
    if (!messages[language]) {
        // If not, set language to 'en-GB'
        language = 'en-GB';
        }
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <IntlApp />
    </IntlProvider>
  );
}
