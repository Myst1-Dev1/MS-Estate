'use client';

import { api } from "@/services/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUpload } from "react-icons/fa6";

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleCreateAccount(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

       try {
        const res = await api.post('auth/register', {
            username, email, password
        });

        if(res.status === 201) {
            console.log("Create account success", res.data);
            router.push('/signIn');
        }
       } catch (error) {
        console.log('Error when create account', error);
       }finally { setLoading(false); }
    }

    return (
        <>
            <div className="container flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="max-w-xl w-full flex flex-col mt-20 lg:mt-0 gap-5">
                    <h1 className="font-bold text-2xl text-center">Create Account</h1>
                    <form onSubmit={handleCreateAccount} className="w-full m-auto flex flex-col gap-5">
                        {/* <div className="flex flex-col m-auto gap-4">
                            <Image src="/images/uploadImage.png" className="m-auto w-16 h-16 rounded-full object-cover" width={200} height={200} alt="imagem de usuário" />
                            <div className="flex gap-3 items-center">
                                <FaUpload />
                                <label className="text-xl cursor-pointer" htmlFor="file">Upload an image</label>
                            </div>
                            <input type="file" id="file" className="hidden" />
                        </div> */}
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input name="username" className="w-full p-2 border border-gray-400 outline-none" type="text" placeholder="Username" />
                            <input name="email" className="w-full p-2 border border-gray-400 outline-none" type="text" placeholder="E-mail" />
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input name="confirm_password" className="w-full p-2 border border-gray-400 outline-none" type="password" placeholder="Confirm password" />
                            <input name="password" className="w-full p-2 border border-gray-400 outline-none" type="password" placeholder="Senha" />
                        </div>
                        <span className="text-center">We have account? <Link href="/signIn" className="text-yellow-600 font-medium">Login</Link></span>
                        <button className="button max-w-80 m-auto w-full">
                            {loading ?
                                <div role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                                : 
                                'Register'
                            }
                        </button>
                    </form>
                </div>
                <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] grid place-items-center">
                    <Image className="w-full min-w-xl object-cover" src="/images/bg.webp" width={400} height={400} alt="foto de predios" />
                </div>
            </div>
        </>
    )
}