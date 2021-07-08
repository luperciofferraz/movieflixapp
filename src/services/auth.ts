import jwtDecode from 'jwt-decode';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

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

export async function userToken() {
  
  const { access_token } = await getSessionData();
  
  return access_token;
}


export async function getSessionData() {

  const sessionData = await AsyncStorage.getItem('authData') ?? '{}';

  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;

}

export function saveSessionData(loginResponse: LoginResponse) {

  setAsyncKeys('authData', JSON.stringify(loginResponse));

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
  
    AsyncStorage.removeItem('authData');
    
  } catch (e) {
    
    console.warn(e);

  }

  
}
