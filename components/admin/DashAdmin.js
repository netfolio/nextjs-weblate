import React from 'react';
import AuthService from "../../services/auth.services";
import {useRouter} from 'next/router';
import {LogoutOutlined} from "@ant-design/icons";
import { useTranslation } from 'react-i18next';


const DashAdmin = (props) => {
  console.log(props)
  const router = useRouter();
  const { t, i18n } = useTranslation('translation');
  const { locale, locales, defaultLocale } = router;

  const handleLogout = () => {
    AuthService.logout();
    router.push('/login')
  };

  const handleChangeLanguage = (lang)=> {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <button onClick={(lang) => handleChangeLanguage(locale)}>en</button>
      <button onClick={(lang) => handleChangeLanguage("fr")}>fr</button>
      <button onClick={(lang) => handleChangeLanguage("nl")}>nl</button>

      <h1>Admin Dashboard</h1>
      <p>name: {props.user.name}</p>
      <p>email: {props.user.email}</p>
      <p>role: {props.user.role}</p>

      <p><strong>Current i18n.language:</strong> {i18n.language}</p>
      <p><strong>Test onClick i18n {i18n.language} with useTranslation:</strong> {t('tr.hello')}</p>


      <p><strong>Current locale:</strong> {locale}</p>

      <p><strong>Default locale:</strong> {defaultLocale}</p>
      <p><strong>Configured locales:</strong> {JSON.stringify(locales)}</p>

      Logout <LogoutOutlined onClick={handleLogout}/>
    </div>
  )
}

export default DashAdmin;