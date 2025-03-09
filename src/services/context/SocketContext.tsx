'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { AuthContext } from "./AuthContext";

interface SocketContextProps {
    socket:null;
}

export const SocketContext = createContext({} as SocketContextProps);

export const SocketContextProvider = ({children}:any) => {
    const { currentUser } = useContext(AuthContext);
    const [socket, setSocket] = useState<null | any>(null);

    useEffect(() => {
        setSocket(io("http://localhost:4000"));
    }, []);

    useEffect(() => {
    currentUser && socket?.emit("newUser", currentUser.id);
    }, [currentUser, socket]);

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}

export function useSocket() {
    const context = useContext(SocketContext);

    return context;
}