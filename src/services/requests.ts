import axios, { AxiosRequestConfig } from 'axios';

import { getSessionData, removeSessionData } from './auth';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://192.168.1.69:8080';

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

    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }

    return makeRequest({ ...params, headers });

}


  