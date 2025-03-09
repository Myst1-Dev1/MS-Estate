import { api } from "./axios";

export async function fetchChats(token:string | any) {
    try {
        const res = await api.get('chats', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log('Error to fetch chats', error);
    }
}