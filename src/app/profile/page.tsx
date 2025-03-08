'use server';

import { ProfilePageContent } from "@/components/profilePageContent";
import { fetchProfilePosts } from "@/services/fetchProfilePosts";
import { cookies } from "next/headers";

export default async function Profile() {
    const cookie = await cookies()
    const token = cookie.get('token');
   
    const profileData = await fetchProfilePosts(token?.value);

    console.log(profileData);

    return (
        <>
            <ProfilePageContent data = {profileData} />
        </>
    )
}