import axios, { AxiosRequestConfig } from 'axios';
import queryString from "query-string";
import { api } from './index';

import { TOKEN, LoginData, getSessionData, saveSessionData } from './auth';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = (params: AxiosRequestConfig) => {

    return axios({

        ...params,
        baseURL: BASE_URL

    })

}

export async function makePrivateRequest(params: AxiosRequestConfig) {

    const sessionData = await getSessionData();

    const headers = {

        'Authorization': `Bearer ${sessionData.access_token}`
    }

    return makeRequest({ ...params, headers });

}

export async function login(loginData: LoginData) {
  
    const payload = queryString.stringify({ ...loginData, grant_type: "password" });
  
    const result = await api.post("oauth/token", payload, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  
    saveSessionData(result.data);
  
    return result;
  
  }
  