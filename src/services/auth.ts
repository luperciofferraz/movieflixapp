import jwtDecode from 'jwt-decode';
import AsyncStorage from "@react-native-async-storage/async-storage";
import queryString from "query-string";
import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://192.168.1.69:8080';

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export const DATABASE = '@movileflixapp:USER_DATA';

export type LoginResponse = {

  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  name: string;
  userId: number;

}

export type AccesToken = {

  exp: number;
  user_name: string;
  authorities: Role[];

}

export type LoginData = {

  username: string;
  password: string;

}

export async function isAllowedByRole(routeRoles: Role[] = []) {

  if (routeRoles.length === 0) {

      return true;
  }

  const { authorities } = await getAccessTokenDecoded();

  return routeRoles.some( role => authorities?.includes(role));

}

export async function userToken() {
  
  const { access_token } = await getSessionData();
  
  return access_token;
}


export async function getSessionData() {

  const sessionData = await AsyncStorage.getItem(DATABASE) ?? '{}';

  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;

}

export function saveSessionData(loginResponse: LoginResponse) {

  setAsyncKeys(DATABASE, JSON.stringify(loginResponse));

}

export function setAsyncKeys(key: string, value: string) {
  
  try {
    
    AsyncStorage.setItem(key, value);

  } catch (e) {
    
    console.warn(e);
  }
}

export async function getAccessTokenDecoded() {

  const sessionData = await getSessionData();

  try {

      const tokenDecoded = jwtDecode(sessionData.access_token);
      return tokenDecoded as AccesToken;

  }
  catch (error) {

      return {} as AccesToken;
  }    
}

export async function isTokenValid() {

  const { exp } = await getAccessTokenDecoded();

  return (Date.now() <= exp * 1000);

}

export async function isAuthenticated() {

  const sessionData = await getSessionData();

  return sessionData.access_token && isTokenValid();

}

export function removeSessionData() {
  
  try {
  
    AsyncStorage.removeItem(DATABASE);
    
  } catch (e) {
    
    console.warn(e);

  }
  
}

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

axios.interceptors.response.use(
                                
  function (response) {
    return response;
  }, 
  
  function (error) {
      if (error.response.status === 401) {
         removeSessionData();
      } 
      return Promise.reject(error);
  }
);

export const makeRequest = (params: AxiosRequestConfig) => {

  return axios({
    ...params,
    baseURL: BASE_URL
  })

}

export async function makePrivateRequest(params: AxiosRequestConfig) {

  const sessionData = await getSessionData();

  const headers = {'Authorization': `Bearer ${sessionData.access_token}`
  
}

return makeRequest({ ...params, headers });

}

