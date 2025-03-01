'use client';

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {

    function handleLogin(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
    
        console.log("Login success", email, password);
    }

    return (
        <>
            <div className="container flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="max-w-xl w-full mt-20 lg:mt-0 flex flex-col gap-5">
                    <h1 className="font-bold text-2xl text-center">Login</h1>
                    <form onSubmit={handleLogin} className="w-full m-auto max-w-96 flex flex-col gap-3">
                        <input name="email" className="w-full p-2 border border-gray-400 outline-none" type="text" placeholder="E-mail" />
                        <input name="password" className="w-full p-2 border border-gray-400 outline-none" type="password" placeholder="Senha" />
                        <span className="text-center">Don't have account? <Link href="/signUp" className="text-yellow-600 font-medium">Create account</Link></span>
                        <button className="button w-full">Sign In</button>
                    </form>
                </div>
                <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] grid place-items-center">
                    <Image className="w-full min-w-xl object-cover" src="/images/bg.webp" width={400} height={400} alt="foto de predios" />
                </div>
            </div>
        </>
    )
}