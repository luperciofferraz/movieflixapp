import { TOKEN, removeSessionData, LoginData } from './auth';
import { makeRequest } from './requests';
import queryString from "query-string";

export function login(loginData: LoginData) {
  
  const headers = {
    Authorization: TOKEN,
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const payload = queryString.stringify({ ...loginData, grant_type: "password" });
  return makeRequest({ method: 'POST', url: '/oauth/token', data: payload, headers });
}

export function logout() {

  removeSessionData();

}

