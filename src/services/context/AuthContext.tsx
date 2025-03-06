'use client';

import { parseCookies, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
    currentUser:string | any;
    updateUser: (data:any) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({children}:any) => {
    const {'user-token': cookie} = parseCookies();
    
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return cookie ? JSON.parse(cookie) : null;
        } catch (error) {
            console.error("Erro ao analisar o cookie:", error);
            return null;
        }
    });

    const updateUser = (data:any) => {
        setCurrentUser(data);
      };
    
      useEffect(() => {
        setCookie(undefined, 'user-token', JSON.stringify(currentUser), {
            maxAge: 60 * 60 * 2
        })
      }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}