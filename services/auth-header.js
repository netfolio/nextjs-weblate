export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    //console.log("userToken", token)
    return { Authorization: 'Bearer ' + token};

  } else {
    return {};
  }
}