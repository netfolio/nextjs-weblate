import React from 'react';
import AuthService from "../../services/auth.services";
import {useRouter} from 'next/router';
import {LogoutOutlined} from "@ant-design/icons";


const DashUser = (props) => {
  const router = useRouter();

  const handleLogout = () => {
    AuthService.logout();
    router.push('/login')
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Name: {props.user.name}</p>
      <p>email: {props.user.email}</p>
      <p>role: {props.user.role}</p>
      Logout <LogoutOutlined onClick={handleLogout}/>
    </div>
  )
};

export default DashUser;