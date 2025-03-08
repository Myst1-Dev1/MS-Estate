'use client';

import { api } from "@/services/axios";
import { useAuth } from "@/services/context/AuthContext";
import { FaBookmark } from "react-icons/fa";

interface SavePostProps {
    id:string;
}

export function SavePost({id}: SavePostProps) {
    const { currentUser } = useAuth();
    
    async function handleSavePost() {
        if(!currentUser) return;
        
        try {
            const res = await api.post('/users/save', { postId: id })
            console.log(res.data);
        } catch (error) {
            console.log('Error when saved post', error);
        }
    }
    
    return (
        <>
            <div onClick={handleSavePost} className="bg-white rounded-md w-fit p-3 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:bg-yellow-500 hover:text-white">
                <FaBookmark className="stroke-2 fill-none stroke-black" />
                <h6>Save the place</h6>
            </div>
        </>
    )
}