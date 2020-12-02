import Login from "./login";
import {useEffect} from "react";
import { useRouter } from 'next/router'

const API_URL = "http://localhost:8888/api-rest/auth/login.php";
const Account = () => {
  const router = useRouter();
  const hasToken = localStorage.getItem("access_token");

  if(!hasToken) {
    router.push('/login')
  }

  useEffect(()=> {

  }, [])

  return (
    <div className="">
      <Login />
    </div>
  )
}
export default Account;
