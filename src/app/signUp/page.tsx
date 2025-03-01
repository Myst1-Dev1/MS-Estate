import Image from "next/image";
import Link from "next/link";
import { FaUpload } from "react-icons/fa6";

export default function SignUp() {
    return (
        <>
            <div className="container flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="max-w-xl w-full flex flex-col mt-20 lg:mt-0 gap-5">
                    <h1 className="font-bold text-2xl text-center">Create Account</h1>
                    <form className="w-full m-auto flex flex-col gap-5">
                        <div className="flex flex-col m-auto gap-4">
                            <Image src="/images/uploadImage.png" className="m-auto w-16 h-16 rounded-full object-cover" width={200} height={200} alt="imagem de usuário" />
                            <div className="flex gap-3 items-center">
                                <FaUpload />
                                <label className="text-xl cursor-pointer" htmlFor="file">Upload an image</label>
                            </div>
                            <input type="file" id="file" className="hidden" />
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input name="username" className="w-full p-2 border border-gray-400 outline-none" type="text" placeholder="Username" />
                            <input name="email" className="w-full p-2 border border-gray-400 outline-none" type="text" placeholder="E-mail" />
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input name="confirm_password" className="w-full p-2 border border-gray-400 outline-none" type="password" placeholder="Confirm password" />
                            <input name="password" className="w-full p-2 border border-gray-400 outline-none" type="password" placeholder="Senha" />
                        </div>
                        <span className="text-center">We have account? <Link href="/signIn" className="text-yellow-600 font-medium">Login</Link></span>
                        <button className="button max-w-80 m-auto w-full">Sign In</button>
                    </form>
                </div>
                <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] grid place-items-center">
                    <Image className="w-full min-w-xl object-cover" src="/images/bg.webp" width={400} height={400} alt="foto de predios" />
                </div>
            </div>
        </>
    )
}