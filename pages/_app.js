import React, {useState} from 'react';
import "antd/dist/antd.css";
import "../styles/style.css";
import {userContext} from "../context/userContext";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

function MyApp({Component, pageProps}) {
  const [user, updateUser] = useState({})

  function setUser(loginResponse) {
    updateUser(loginResponse)
  }

  console.log("index", user)
  return (
    <userContext.Provider value={{user, setUser}}>
      <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
      </I18nextProvider>
    </userContext.Provider>
  )
}

export default MyApp
