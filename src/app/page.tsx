import { HomeInputs } from "@/components/homeInputs";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container flex justify-center gap-8 items-center">
      <div className="max-w-xl w-full flex flex-col gap-8">
        <h1 className="font-bold text-[50px]">Find Real Estate & Get <br /> Your Dream Place</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum animi dolor, explicabo amet velit a quaerat ad culpa molestiae unde natus voluptatem! Explicabo atque nobis totam iure tenetur id!</p>
        <HomeInputs />
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
