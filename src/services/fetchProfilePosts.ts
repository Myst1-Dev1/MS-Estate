import { api } from "./axios";

export async function fetchProfilePosts(token:string | any) {
    if (!token) {
        console.log('Nenhum token disponível');
        return;
    }

    try {
        const res = await api.get('users/profilePosts', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log('Error to fetch a profile post', error);
        throw error;
    }
}