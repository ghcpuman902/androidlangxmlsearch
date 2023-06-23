import React from 'react';
import { useIntl } from 'react-intl';
import App from './App';

export default function IntlApp(props) {
  const intl = useIntl();

  // passing intl as a prop
  return <App {...props} intl={intl} />;

}