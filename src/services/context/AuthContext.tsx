'use client';

import { parseCookies } from "nookies";
import { createContext, useContext, useState } from "react";

interface AuthContextProps {
    currentUser:string | any;
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

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}