import React, 
{ createContext,
  ReactNode,
  useContext,
  useState,
  useEffect 
} from 'react';

import { getSessionData, LoginResponse, getAccessTokenDecoded, Role } from '../services/auth';

type AuthContextData = {
    loginResponse: LoginResponse;
    isAllowedByRole: () => Promise<boolean> ;
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
        
        const loginData = await getSessionData();

        console.log('Login Data Auth: ' + loginData);

        setLoginResponse(loginData);
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value = {{
            loginResponse,
            isAllowedByRole
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
