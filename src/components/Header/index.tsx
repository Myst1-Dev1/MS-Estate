'use client';

import { useAuth } from "@/services/context/AuthContext";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export function Header() {
    const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);

    const {currentUser} = useAuth();

    function handleOpenMobileNavBar() {
        setIsMobileNavBarOpen(true);
        setTimeout(() => {
            gsap.fromTo('.mobile-navbar', {opacity:0, left:-240}, {opacity:1, left:0, duration:1, ease:'power2'})
        }, 10);
    }

    function handleCloseMobileNavBar() {
        gsap.to('.mobile-navbar', {opacity:0, left:-240, onComplete:() => setIsMobileNavBarOpen(false), duration:0.8, ease:'power3.in'})
    }

    return (
        <>
            <header className="absolute top-0 left-0 right-0 container py-5 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <h1 className="text-xl lg:text-3xl font-bold">MS Estate</h1>
                    <nav className="hidden lg:flex mt-2 gap-4">
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Home</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">About</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Contact</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Agents</Link>
                    </nav>
                </div>
                {currentUser ? 
                    <div className="flex gap-8 items-center">
                        <div className="flex items-center gap-4">
                            <Image className="w-10 h-10 object-cover rounded-full" src={currentUser?.avatar || "/images/user1.webp"} width={200} height={200} alt="foto do usuário" />
                            <h2 className="font-bold">{currentUser?.username}</h2>
                        </div>
                        <Link href="/profile" className="button">Profile</Link>
                    </div>
                    :
                    <div className="hidden lg:flex gap-10 items-center px-4">
                        <Link href="/signIn">Sign In</Link>
                        <Link href="/signUp" className="button">Sign Up</Link>
                    </div>
                }
                <FaBars onClick={handleOpenMobileNavBar} className="block lg:hidden" />
            </header>

            {isMobileNavBarOpen &&
            <nav className="mobile-navbar flex flex-col justify-center items-center gap-10 fixed top-0 left-0 right-0 bg-[#303030] text-white h-screen max-w-60">
                <FaTimes onClick={handleCloseMobileNavBar}  className="absolute top-2 left-[210px]" />
                <Link onClick={handleCloseMobileNavBar} className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Home</Link>
                <Link onClick={handleCloseMobileNavBar} className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">About</Link>
                <Link onClick={handleCloseMobileNavBar} className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Contact</Link>
                <Link onClick={handleCloseMobileNavBar} className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Agents</Link>
            </nav>
            }
        </>
    )
}