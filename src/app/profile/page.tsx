'use server';

import { ProfilePageContent } from "@/components/profilePageContent";
import { fetchChats } from "@/services/fetchChats";
import { fetchProfilePosts } from "@/services/fetchProfilePosts";
import { cookies } from "next/headers";

export default async function Profile() {
    const cookie = await cookies()
    const token = cookie.get('token');
   
    const profileData = await fetchProfilePosts(token?.value);

    const chats = await fetchChats(token?.value);

    console.log(chats);
    

    return (
        <>
            <ProfilePageContent data = {profileData} chats = {chats} />
        </>
    )
}