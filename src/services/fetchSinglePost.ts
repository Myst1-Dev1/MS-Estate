import { api } from "./axios";

export async function fetchSinglePost(id:string) {
    try {
        const res = await api.get(`/posts/${id}`);

        return res.data;
    } catch (error) {
        console.log('Error to fetch a single post', error);
    }
}