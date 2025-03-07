'use client';

import { ResultsMap } from "@/components/resultsMap";
import { api } from "@/services/axios";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBath, FaBookmark, FaRocketchat, FaSearch } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export default function Results() {
    const [posts, setPosts] = useState<Post[]>([]);

    const searchParams = useSearchParams();
    const city = searchParams.get("city") || "";
    const type = searchParams.get("type") || "";
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";

    useEffect(() => {
        const fetchData = async () => {
          try {
            const queryString = searchParams.toString();
            const res = await api.get(`/posts?${queryString}`);
            setPosts(res.data);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
      
        fetchData();
      }, [searchParams]);
      
      console.log(posts);

    return (
        <>
            <div className="container flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="lg:max-w-xl mt-10 w-full flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        {city !== "" ? <h2 className="text-2xl font-normal">Search results for {type} in <span className="font-bold">{city}</span></h2> : ""}
                        <div className="grid grid-cols-6 gap-3 items-center">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="location">Location</label>
                                <input id="location" className="w-full p-[10px] border border-gray-300 outline-none" type="text" placeholder="location" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="type">Type</label>
                                <select id="type" className="w-full p-[10px] border border-gray-300 outline-none">
                                    <option value="Rent">Rent</option>
                                    <option value="Buy">Buy</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="type">Property</label>
                                <select id="type" className="w-full p-[10px] border border-gray-300 outline-none">
                                    <option value="Rent">Any</option>
                                    <option value="Buy">Any</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="minPrice">Min Price</label>
                                <input id="MinPrice" className="w-full p-[10px] border border-gray-300 outline-none" type="text" placeholder="any" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="maxPrice">Max Price</label>
                                <input id="MaxPrice" className="w-full p-[10px] border border-gray-300 outline-none" type="text" placeholder="any" />
                            </div>
                            <div className="cursor-pointer w-14 h-12 mt-auto bg-yellow-500 text-white text-xl px-5 grid place-items-center transition-all duration-500 hover:bg-yellow-700">
                                <FaSearch />
                            </div>
                        </div>
                    </div>
                    <div className="h-full lg:h-[300px] 2xl:h-[700px] scrollDontShow overflow-y-scroll">
                        {posts?.map(post => (
                        <Link key={post.id} href={`apartament/${post.id}`} className="flex flex-col lg:flex-row gap-3 mb-5">
                            <Image className="object-cover lg:max-w-60 w-full rounded-lg" src={post.images[0] || "/images/apartament.webp"} width={400} height={400} alt="foto do apartamento" />
                            <div className="flex flex-col gap-4">
                                <h5 className="font-semibold text-xl">{post.title}</h5>
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="text-gray-500" />
                                    <span className="text-gray-500">{post.address}, {post.city}</span>
                                </div>
                                <h6 className="text-xl bg-yellow-200 w-fit p-1">{post.price}</h6>
                                <div className="flex justify-between gap-5">
                                    <div className="flex gap-3">
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBed className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">{post.bedroom} bedroom</span>
                                        </div>
                                        <div className="flex gap-1 items-center w-fit p-1 bg-gray-100">
                                            <FaBath className="stroke-2 stroke-black fill-none" />
                                            <span className="text-sm">{post.bathroom} bathroom</span>
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
                        ))}
                    </div>
                </div>
                <div className="min-h-screen w-full lg:w-[448px] bg-[#FCF6F3] grid place-items-end">
                    <div className="lg:h-[30rem] h-full w-full rounded-lg overflow-hidden">
                        <ResultsMap post={posts} />
                    </div>
                </div>
            </div>
        </>
    )
}