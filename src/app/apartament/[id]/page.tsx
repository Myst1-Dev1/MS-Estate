'use server';

import { ApartamentImages } from "@/components/apartamentImages";
import { Map } from "@/components/map";
import { fetchSinglePost } from "@/services/fetchSinglePost";
import Image from "next/image";
import { CiForkAndKnife } from "react-icons/ci";
import { FaBookmark, FaHandshake, FaPaw, FaRocketchat, FaSchool, FaTools } from "react-icons/fa";
import { FaBath, FaBed, FaBus, FaExpand } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export default async function Apartament({params}:any) {
    const { id } = await params;

    const data = await fetchSinglePost(id);

    return (
        <>
             <div className="container flex flex-col lg:flex-row justify-center gap-8">
                <div className="lg:max-w-xl mt-24 w-full h-full flex flex-col gap-8">
                    <ApartamentImages data={data} />                
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-medium">{data?.title}</h2>
                             <div className="flex items-center gap-1">
                                <FiMapPin className="text-gray-500" />
                                <span className="text-gray-500">{data?.address}, {data?.city}</span>
                            </div>
                            <h6 className="text-xl bg-yellow-200 w-fit p-1">${data?.price}</h6>
                        </div>
                        <div className="bg-yellow-50 max-w-40 ml-auto w-full flex flex-col gap-3 justify-center items-center">
                            <Image className="rounded-full w-12 h-12 object-cover" src={data?.user.avatar} width={400} height={400} alt="foto do proprietário"/>
                            <h6 className="font-bold">{data?.user.username}</h6>
                        </div>
                    </div>
                    <p className="mb-5">{data?.postDetail.desc}</p>
                </div>
                <div className="min-h-screen w-full lg:max-w-md bg-[#FCF6F3] flex flex-col justify-center">
                    <div className="px-4 flex gap-1 flex-col h-full justify-between mb-5 mt-5 lg:mt-[85px]">
                        <h5 className="font-bold mb-3">General</h5>
                        <div className="bg-white w-full px-2 py-3 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FaTools className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Utilities</h6>
                                    <p>{data?.postDetail.utilities}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPaw className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Pet Policy</h6>
                                    <p>{data?.postDetail.pet}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaHandshake className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Property Fees</h6>
                                    <p>{data?.postDetail.income}</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Room sizes</h5>
                        <div className="flex justify-between">
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaExpand className="stroke-2 fill-none stroke-gray-700" />
                                <h6>{data?.postDetail.size}</h6>
                            </div>
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaBed className="stroke-2 fill-none stroke-gray-700" />
                                <h6>{data?.bedroom} bed</h6>
                            </div>
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaBath className="stroke-2 fill-none stroke-gray-700" />
                                <h6>{data?.bathroom} bathroom</h6>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Nearby Places</h5>
                        <div className="bg-white flex justify-between items-center w-full px-2 py-3">
                            <div className="flex items-center gap-2">
                                <FaSchool className="stroke-2 text-xl fill-none stroke-gray-700" />
                                <div>
                                    <h6 className="font-medium">School</h6>
                                    <p className="text-sm">{data?.postDetail.school}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBus className="stroke-2 text-xl fill-none stroke-gray-700" />
                                <div>
                                    <h6 className="font-medium">Bus Stop</h6>
                                    <p className="text-sm">{data?.postDetail.bus}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CiForkAndKnife className="text-xl text-gray-700" />
                                <div>
                                    <h6 className="font-medium">Restaurant</h6>
                                    <p className="text-sm">{data?.postDetail.restaurant}</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Location</h5>
                        <div className="h-40 w-full rounded-lg overflow-hidden">
                        <Map 
                            latitude={data?.latitude} 
                            longitude={data.longitude}
                            localImage={data.images?.[0]}
                            title={data?.title}
                            bedroom={data?.bedroom}
                            price={data?.price}
                        />
                        </div>
                        <div className="flex justify-between mt-5">
                            <div className="bg-white rounded-md w-fit p-3 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:bg-yellow-500 hover:text-white">
                                <FaRocketchat className="stroke-2 fill-none stroke-black" />
                                <h6>Send a message</h6>
                            </div>
                            <div className="bg-white rounded-md w-fit p-3 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:bg-yellow-500 hover:text-white">
                                <FaBookmark className="stroke-2 fill-none stroke-black" />
                                <h6>Save the place</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}