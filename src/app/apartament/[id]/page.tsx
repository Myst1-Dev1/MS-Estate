import Image from "next/image";


export default function Apartament() {
    return (
        <>
             <div className="container flex justify-center gap-8 items-center">
                <div className="max-w-xl w-full flex flex-col gap-8">
                    <div className="flex gap-3">
                        <Image className="max-w-96 h-[22rem] object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                        <div className="flex flex-col justify-between">
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                            <Image className="max-w-40 object-cover rounded-lg" src="/images/apartament.webp" width={400} height={400} alt="imagem do apartamento" />
                        </div>
                    </div>
                </div>
                <div className="min-h-screen max-w-md bg-[#FCF6F3] grid place-items-center">
                    <Image className="w-full min-w-xl object-cover" src="/images/bg.webp" width={400} height={400} alt="foto de predios" />
                </div>
            </div>
        </>
    )
}