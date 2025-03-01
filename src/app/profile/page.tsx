'use client';

import { ChatBox } from "@/components/chatBox";
import { api } from "@/services/axios";
import { useAuth } from "@/services/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useState } from "react";
import { FaBath, FaBookmark, FaRocketchat } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export default function Profile() {
    const [openChat, setOpenChat] = useState(false);

    const { currentUser } = useAuth();

    const router = useRouter();

    async function handleLogout() {
        const res = await api.post('auth/logout');
        destroyCookie(null,'user-token');

        router.push('/');
        console.log('Logout success', res.data);
    }

    return (
        <>
            <div className="container flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="max-w-xl mt-20 w-full flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-thin mb-5">User Information</h2>
                            <Link href="/profileUpdate" className="bg-yellow-400 p-2 w-fit font-medium transition-all duration-500 hover:bg-yellow-600">Update Profile</Link>
                        </div> 
                        <div className="flex items-center gap-4">
                            <h3>Avatar:</h3>
                            <Image className="h-10 w-10 rounded-full object-cover" src={currentUser?.avatar || "/images/user1.webp"} width={200} height={200} alt="foto do usuário" />
                        </div>
                        <div className="flex items-center gap-4">
                            <h3>Username:</h3>
                            <h3 className="font-bold">{currentUser?.username}</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <h3>Email:</h3>
                            <h3 className="font-bold">{currentUser?.email}</h3>
                        </div>
                        <button onClick={handleLogout} className="button max-w-20">Logout</button>
                    </div>
                    <div className="h-full lg:h-[300px] 2xl:h-[700px] scrollDontShow overflow-y-scroll">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-2xl font-thin">My List</h3>
                            <button className="bg-yellow-400 p-2 w-fit font-medium transition-all duration-500 hover:bg-yellow-600">Add New Post</button>
                        </div> 
                        <Link href="/apartament/1" className="flex flex-col lg:flex-row gap-3 mb-5">
                            <Image className="object-cover lg:max-w-60 w-full rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="foto do apartamento" />
                            <div className="flex flex-col gap-4">
                                <h5 className="font-semibold text-xl">A great apartament next to the park!</h5>
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="text-gray-500" />
                                    <span className="text-gray-500">456 Park Avenue, London</span>
                                </div>
                                <h6 className="text-xl bg-yellow-200 w-fit p-1">$1000</h6>
                                <div className="flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBed className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">2 bedroom</span>
                                        </div>
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBath className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">1 bathroom</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaBookmark className="stroke-2 stroke-black fill-none" />
                                        </div>
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaRocketchat className="stroke-2 stroke-black fill-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/apartament/1" className="flex flex-col lg:flex-row gap-3 mb-5">
                            <Image className="object-cover lg:max-w-60 w-full rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="foto do apartamento" />
                            <div className="flex flex-col gap-4">
                                <h5 className="font-semibold text-xl">A great apartament next to the park!</h5>
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="text-gray-500" />
                                    <span className="text-gray-500">456 Park Avenue, London</span>
                                </div>
                                <h6 className="text-xl bg-yellow-200 w-fit p-1">$1000</h6>
                                <div className="flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBed className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">2 bedroom</span>
                                        </div>
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBath className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">1 bathroom</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaBookmark className="stroke-2 stroke-black fill-none" />
                                        </div>
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaRocketchat className="stroke-2 stroke-black fill-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <h3 className="text-2xl mb-8 font-thin">Saved List</h3>
                        <Link href="/apartament/1" className="flex flex-col lg:flex-row gap-3 mb-5">
                            <Image className="object-cover lg:max-w-60 w-full rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="foto do apartamento" />
                            <div className="flex flex-col gap-4">
                                <h5 className="font-semibold text-xl">A great apartament next to the park!</h5>
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="text-gray-500" />
                                    <span className="text-gray-500">456 Park Avenue, London</span>
                                </div>
                                <h6 className="text-xl bg-yellow-200 w-fit p-1">$1000</h6>
                                <div className="flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBed className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">2 bedroom</span>
                                        </div>
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBath className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">1 bathroom</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaBookmark className="stroke-2 stroke-black fill-none" />
                                        </div>
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaRocketchat className="stroke-2 stroke-black fill-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/apartament/1" className="flex flex-col lg:flex-row gap-3 mb-5">
                            <Image className="object-cover lg:max-w-60 w-full rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="foto do apartamento" />
                            <div className="flex flex-col gap-4">
                                <h5 className="font-semibold text-xl">A great apartament next to the park!</h5>
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="text-gray-500" />
                                    <span className="text-gray-500">456 Park Avenue, London</span>
                                </div>
                                <h6 className="text-xl bg-yellow-200 w-fit p-1">$1000</h6>
                                <div className="flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBed className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">2 bedroom</span>
                                        </div>
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBath className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">1 bathroom</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaBookmark className="stroke-2 stroke-black fill-none" />
                                        </div>
                                        <div className="cursor-pointer border border-gray-300 p-1 w-fit transition-all duration-500 hover:bg-yellow-500">
                                            <FaRocketchat className="stroke-2 stroke-black fill-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="min-h-screen lg:max-w-md w-full bg-[#FCF6F3] flex flex-col justify-center">
                    <div className="px-4 mt-10">
                        <h2 className="font-thin text-xl mb-6">Messages</h2>
                        <div className="h-full lg:h-[460px] 2xl:h-[900px] scrollDontShow overflow-y-scroll">
                            <div onClick={() => setOpenChat(true)} className="cursor-pointer flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                            <div className="flex gap-3 items-center bg-white p-3 w-full rounded-lg mb-5">
                                <Image className="object-cover w-9 h-9 rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                                <h3 className="font-bold">John Doe</h3>
                                <p>Can i see it today?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatBox isOpenChatBox={openChat} onSetOpenChat={setOpenChat} />
        </>
    )
}