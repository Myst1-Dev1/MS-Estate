import Image from "next/image";
import { CiForkAndKnife } from "react-icons/ci";
import { FaBookmark, FaHandshake, FaPaw, FaRocketchat, FaSchool, FaTools } from "react-icons/fa";
import { FaBath, FaBed, FaBus, FaExpand } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export default function Apartament() {
    return (
        <>
             <div className="container flex justify-center gap-8">
                <div className="max-w-xl mt-20 w-full h-full flex flex-col gap-8">
                    <div className="flex gap-3">
                        <Image className="max-w-96 h-[22rem] object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                        <div className="flex flex-col justify-between">
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-medium">A great apartament next to the park!</h2>
                             <div className="flex items-center gap-1">
                                <FiMapPin className="text-gray-500" />
                                <span className="text-gray-500">456 Park Avenue, London</span>
                            </div>
                            <h6 className="text-xl bg-yellow-200 w-fit p-1">$1000</h6>
                        </div>
                        <div className="bg-yellow-50 max-w-40 ml-auto w-full flex flex-col gap-3 justify-center items-center">
                            <Image className="rounded-full w-12 h-12 object-cover" src="/images/user1.webp" width={400} height={400} alt="foto do proprietário"/>
                            <h6 className="font-bold">Kevin Walker</h6>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aut. Animi mollitia autem doloremque unde magnam error nostrum culpa impedit deserunt, quo rerum. Sunt provident adipisci incidunt unde est in?</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aut. Animi mollitia autem doloremque unde magnam error nostrum culpa impedit deserunt, quo rerum. Sunt provident adipisci incidunt unde est in?</p>
                </div>
                <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] flex flex-col justify-center">
                    <div className="px-4 flex flex-col h-full justify-between mb-5 mt-[70px]">
                        <h5 className="font-bold mb-3">General</h5>
                        <div className="bg-white w-full px-2 py-3 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FaTools className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Utilities</h6>
                                    <p>Renter is responsible</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPaw className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Pet Policy</h6>
                                    <p>Pets allowed</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaHandshake className="stroke-2 fill-none stroke-yellow-700" />
                                <div>
                                    <h6 className="font-bold">Property Fees</h6>
                                    <p>Must have 3x the rent in total household income</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Room sizes</h5>
                        <div className="flex justify-between">
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaExpand className="stroke-2 fill-none stroke-gray-700" />
                                <h6>80sqm(861sqft)</h6>
                            </div>
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaBed className="stroke-2 fill-none stroke-gray-700" />
                                <h6>2 bed</h6>
                            </div>
                            <div className="bg-white p-2 w-fit flex items-center gap-2">
                                <FaBath className="stroke-2 fill-none stroke-gray-700" />
                                <h6>1 bathroom</h6>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Nearby Places</h5>
                        <div className="bg-white flex justify-between items-center w-full px-2 py-3">
                            <div className="flex items-center gap-2">
                                <FaSchool className="stroke-2 text-xl fill-none stroke-gray-700" />
                                <div>
                                    <h6 className="font-medium">School</h6>
                                    <p className="text-sm">250m away</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBus className="stroke-2 text-xl fill-none stroke-gray-700" />
                                <div>
                                    <h6 className="font-medium">Bus Stop</h6>
                                    <p className="text-sm">100m away</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CiForkAndKnife className="text-xl text-gray-700" />
                                <div>
                                    <h6 className="font-medium">Restaurant</h6>
                                    <p className="text-sm">200m away</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="font-bold mb-3">Location</h5>
                        <div className="bg-black text-white h-40 w-full rounded-lg grid place-items-center">
                            <span>mapa</span>
                        </div>
                        <div className="flex justify-between">
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