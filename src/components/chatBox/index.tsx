import { api } from "@/services/axios";
import { useAuth } from "@/services/context/AuthContext";
import { useSocket } from "@/services/context/SocketContext";
import { Chat, Message } from "@/types/post";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { format } from 'timeago.js';

interface ChatBoxProps {
    chat:Chat | null | any;
    onSetOpenChat:Dispatch<SetStateAction<boolean>> | any;
}

export function ChatBox({ chat, onSetOpenChat }:ChatBoxProps) {
    const { currentUser } = useAuth();
    const { socket } = useSocket();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const text = formData.get("text-submit");
    
        if (!text) return;
        try {
          const res = await api.post("/messages/" + chat.id, { text });
          onSetOpenChat((prev:any) => ({ ...prev, messages: [...prev.messages, res.data] }));
          e.target.reset();
          socket.emit("sendMessage", {
            receiverId: chat.receiver.id,
            data: res.data,
          });
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        const read = async () => {
          try {
            await api.put("/chats/read/" + chat.id);
          } catch (err) {
            console.log(err);
          }
        };
    
        if (chat && socket) {
          socket?.on("getMessage", (data:any) => {
            if (chat.id === data.chatId) {
              onSetOpenChat((prev:any) => ({ ...prev, messages: [...prev.messages, data] }));
              read();
            }
          });
        }
        return () => {
          socket?.off("getMessage");
        };
      }, [socket, chat]);

    return (
        <>
            {chat && 
                <>
                    <div className="fixed bottom-0 right-0 lg:right-40 max-w-96 w-full bg-white z-50">
                        <div className="flex justify-between items-center bg-[#FBDFA1] p-3 w-full">
                            <div className="flex gap-3 items-center">
                                <Image className="w-8 h-8 object-cover rounded-full" src={chat?.receiver?.avatar || "/images/user1.webp"} width={200} height={200} alt="foto do usuário" />
                                <h2>{chat?.receiver?.username}</h2>
                            </div>
                            <FaTimes onClick={() => onSetOpenChat(null)} className="cursor-pointer" />
                        </div>
                        <div className="px-4 my-4 flex flex-col gap-3 h-[300px] scrollDontShow overflow-y-scroll">
                            {chat?.messages?.map((chat:Message, index:number) => (
                                <div key={index} className={`grid grid-cols-1 ${chat.userId === currentUser.id ? 'place-items-start' : 'place-items-end'}`}>
                                    <p>{chat.text}</p>
                                    <span className="bg-yellow-100 w-fit rounded-lg p-1 text-sm">{format(chat.createdAt)}</span>
                                </div>
                            ))}
                        </div>
                        <form className="flex" onSubmit={handleSubmit}>
                            <textarea name="text-submit" className="w-full h-fit p-3 outline-none bg-[#f3f3f3] resize-none" />
                            <button type="submit" className="bg-[#FBDFA1] p-3 max-w-24 w-full">Send</button>
                        </form>
                    </div>
                </>
            }
        </>
    )
}