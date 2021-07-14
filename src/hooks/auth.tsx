import queryString from "query-string";

import React, 
{ createContext,
  ReactNode,
  useContext,
  useState,
  useEffect 
} from 'react';

import { getSessionData, LoginResponse, getAccessTokenDecoded, Role, LoginData, TOKEN, makeRequest, removeSessionData, saveSessionData, isTokenValid } from '../services/requests';

type AuthContextData = {
    loginResponse: LoginResponse;
    isAllowedByRole: (routeRoles: Role[]) => Promise<boolean> ;
    signIn: (loginData: LoginData) => Promise<void>;
    signOut: () => void;
    isAuthenticated: () => Promise<boolean | "">;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps) {

    const [loginResponse, setLoginResponse] = useState<LoginResponse>({} as LoginResponse);

    async function isAllowedByRole(routeRoles: Role[] = []) {

        if (routeRoles.length === 0) {
            return true;
        }
      
        const { authorities } = await getAccessTokenDecoded();
      
        return routeRoles.some( role => authorities?.includes(role));
      
    }

    async function loadUserStorageData() {
        
        const loginResponse = await getSessionData();
        setLoginResponse(loginResponse);

    }

    async function signIn(loginData: LoginData) {
  
        const headers = {
          Authorization: TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded'
        }

        const payload = queryString.stringify({ ...loginData, grant_type: "password" });
        
        const response = await makeRequest({ method: 'POST', url: '/oauth/token', data: payload, headers });

        saveSessionData(response.data);

        setLoginResponse(response.data);
    }
      
    function signOut() {
      
        setLoginResponse({} as LoginResponse);
        removeSessionData();
      
    }

    async function isAuthenticated() {

        const sessionData = await getSessionData();
      
        return sessionData.access_token && isTokenValid();
      
    }
      

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value = {{
            loginResponse,
            isAllowedByRole,
            signIn,
            signOut,
            isAuthenticated
        }}>

            {children}

        </AuthContext.Provider>

    )

}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}
