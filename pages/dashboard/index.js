import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import AuthService from '../../services/auth.services';
import DashAdmin from "../../components/admin/DashAdmin";
import DashTraductor from "../../components/traductor/DashTraductor";
import DashUser from "../../components/user/DashUser";

const SelectDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState('')

  useEffect(() => {
    AuthService.getCurrentUser().then(r => {
      if (r.data.success === 0)
        router.push('/login')
      else
        setUser(r.data.user)
    });
  }, []);

  const components = [
    {
      "admin": <DashAdmin user={user}/>,
      "traductor": <DashTraductor user={user}/>,
      "user": <DashUser user={user}/>
    }
  ];

  const goDashboard = user && components[0][user.role];
  return goDashboard
}

export default SelectDashboard;