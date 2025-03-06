'use client';

import UploadWidget from "@/components/uploadWidget";
import { api } from "@/services/axios";
import Image from "next/image";
import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function AddNewPage() {
    const [images, setImages] = useState<[] | any>([]);
    const [loading, setLoading] = useState(false);

    async function handleCreateNewPost(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const inputs:any = Object.fromEntries(formData);

        try {
            const res = await api.post('/posts', { 
                postData: {
                    title: inputs.title,
                    price: parseInt(inputs.price),
                    address: inputs.address,
                    city: inputs.city,
                    bedroom: parseInt(inputs.bedroom),
                    bathroom: parseInt(inputs.bathroom),
                    type: inputs.type,
                    property: inputs.property,
                    latitude: inputs.latitude,
                    longitude: inputs.longitude,
                    images: images,
                  },
                  postDetail: {
                    desc: inputs.desc.replace(/<[^>]+>/g, ""),
                    utilities: inputs.utilities,
                    pet: inputs.pet,
                    income: inputs.income,
                    size: parseInt(inputs.size),
                    school: parseInt(inputs.school),
                    bus: parseInt(inputs.bus),
                    restaurant: parseInt(inputs.restaurant),
                  },
             });

             console.log('Success', res.data);
        } catch (error) {
            console.log('Error when create new post', error);
        }finally { setLoading(false) }
    }

    console.log(images);

    return (
        <>
            <div className="container min-h-screen flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="max-w-xl w-full mt-20 lg:mt-0 flex flex-col gap-5 h-full lg:h-[450px] 2xl:h-[850px] scrollDontShow overflow-y-scroll">
                    <h1 className="font-bold text-2xl text-center">Welcome back</h1>
                    <form onSubmit={handleCreateNewPost} className="w-full m-auto flex flex-col gap-3">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="price">Price</label>
                                <input type="number" id="price" name="price" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold" htmlFor="desc">Description</label>
                            <SunEditor name="desc" height="150" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="city">City</label>
                                <input type="text" id="city" name="city" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="bedroom">Bedroom number</label>
                                <input type="number" id="price" name="bedroom" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="bathroom">Bathroom number</label>
                                <input type="number" id="bathroom" name="bathroom" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="latitude">Latitude</label>
                                <input type="text" id="latitude" name="latitude" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="longitude">Longitude</label>
                                <input type="text" id="longitude" name="longitude" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="type">Bathroom number</label>
                                <select id="type" name="type" className="w-full p-2 border border-gray-400 outline-none">
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="property">Property</label>
                                <select id="property" name="property" className="w-full p-2 border border-gray-400 outline-none">
                                    <option value="apartament">Apartament</option>
                                    <option value="house">House</option>
                                    <option value="condo">Condo</option>
                                    <option value="land">Land</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="policy">Utilities policy</label>
                                <select id="policy" name="policy" className="w-full p-2 border border-gray-400 outline-none">
                                    <option value="Owner is responsibler">Owner is responsible</option>
                                    <option value="buy">Buy</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="pet">Pet policy</label>
                                <select id="pet" name="pet_policy" className="w-full p-2 border border-gray-400 outline-none">
                                    <option value="Allowed">Allowed</option>
                                    <option value="buy">Buy</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="income">Income policy</label>
                                <input type="text" id="income" name="income" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="size">Total size(sqft)</label>
                                <input type="number" id="size" name="size" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="school">School</label>
                                <input type="number" id="school" name="school" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="bus">Bus</label>
                                <input type="number" id="bus" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="font-bold" htmlFor="restaurant">Restaurant</label>
                                <input type="number" id="restaurante" className="w-full p-2 border border-gray-400 outline-none" />
                            </div>
                            <button className="button rounded-lg bg-emerald-600 h-16 mt-auto text-white hover:bg-emerald-900">
                                {loading ?
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                    :
                                    'Send Post'
                                }
                            </button>
                        </div>
                    </form>
                </div>
                <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] flex flex-col justify-center items-center gap-4">
                    <div className="flex gap-4">
                        {images?.map((img: any, index: number) => (
                            <Image key={index} className="w-full h-24 object-cover" src={img} width={400} height={400} alt="foto de predios" />
                        ))}
                    </div>
                    <UploadWidget setState={setImages} multiple={true} />
                </div>
            </div>
        </>
    )
}