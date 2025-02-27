import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

interface ChatBoxProps {
    isOpenChatBox:boolean;
    onSetOpenChat:Dispatch<SetStateAction<boolean>> | any;
}

export function ChatBox({ isOpenChatBox, onSetOpenChat }:ChatBoxProps) {
    return (
        <>
            {isOpenChatBox && 
                <div className="absolute bottom-0 right-40 max-w-96 w-full bg-white z-50">
                    <div className="flex justify-between items-center bg-[#FBDFA1] p-3 w-full">
                        <div className="flex gap-3 items-center">
                            <Image className="w-8 h-8 object-cover rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário" />
                            <h2>John Doe</h2>
                        </div>
                        <FaTimes onClick={() => onSetOpenChat(false)} className="cursor-pointer" />
                    </div>
                    <div className="px-4 my-4 h-[300px] scrollDontShow overflow-y-scroll">
                        <div>
                            <p>Hi</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <p>Hi Daisy</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div>
                            <p>It is still available?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <p>Is there a shopping mail nearby?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div>
                            <p>It is still available?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <p>Is there a shopping mail nearby?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div>
                            <p>It is still available?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <p>Is there a shopping mail nearby?</p>
                            <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">3 hours ago</span>
                        </div>
                    </div>
                    <div className="flex">
                        <input className="w-full p-3 outline-none bg-[#f3f3f3]" type="text" />
                        <button className="bg-[#FBDFA1] p-3 max-w-24 w-full">Send</button>
                    </div>
                </div>
            }
        </>
    )
}