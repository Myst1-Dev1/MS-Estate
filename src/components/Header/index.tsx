import Link from "next/link";

export function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 right-0 container py-5 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <h1 className="text-xl lg:text-3xl font-bold">MS Estate</h1>
                    <nav className="flex mt-2 gap-4">
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Home</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">About</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Contact</Link>
                        <Link className="font-normal transition-all duration-500 hover:text-yellow-500" href="/">Agents</Link>
                    </nav>
                </div>
                <div className="flex gap-10 items-center px-4">
                    <h2>Sign In</h2>
                    <button className="px-3 py-2 bg-yellow-400 transition-all duration-500 hover:bg-yellow-600">Sign Up</button>
                </div>
            </header>
        </>
    )
}