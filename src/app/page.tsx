import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container flex justify-center gap-8 items-center">
      <div className="max-w-xl w-full flex flex-col gap-8">
        <h1 className="font-bold text-[50px]">Find Real Estate & Get <br /> Your Dream Place</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum animi dolor, explicabo amet velit a quaerat ad culpa molestiae unde natus voluptatem! Explicabo atque nobis totam iure tenetur id!</p>
        <div>
          <div className="flex">
            <span className="bg-black max-w-24 text-center w-full block p-3 text-white cursor-pointer transition-all duration-500 hover:bg-yellow-500">Buy</span>
            <span className="border border-gray-300 max-w-24 text-center w-full block p-3 cursor-pointer transition-all duration-500 hover:bg-yellow-500">Rent</span>
          </div>
          <div className="flex justify-between w-full border border-gray-300">
            <input type="text" className="bg-none focus:outline-none focus:border-r-2 focus:border-gray-300 p-3 w-full" placeholder="City Location" />
            <input type="text" className="bg-none focus:outline-none focus:border-r-2 focus:border-gray-300 p-3 w-full" placeholder="Min Price" />
            <input type="text" className="bg-none outline-none p-3 w-full" placeholder="Max Price" />
            <div className="cursor-pointer w-14 h-14 bg-yellow-500 text-white text-xl px-5 grid place-items-center transition-all duration-500 hover:bg-yellow-700">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl">16+</h2>
            <span>Years of Experience</span>
          </div>
          <div>
            <h2 className="font-bold text-2xl">200</h2>
            <span>Awards Gained</span>
          </div>
          <div>
            <h2 className="font-bold text-2xl">1200+</h2>
            <span>Propertys Ready</span>
          </div>
        </div>
      </div>
      <div className="min-h-screen max-w-md w-full bg-[#FCF6F3] grid place-items-center">
        <Image className="w-full min-w-xl object-cover" src="/images/bg.webp" width={400} height={400} alt="foto de predios" />
      </div>
    </div>
  );
}
