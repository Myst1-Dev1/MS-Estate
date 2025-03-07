'use client';

import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface ApartamentImagesProps {
    data:any;
}

export function ApartamentImages({data}:ApartamentImagesProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
             <div className="flex gap-5 flex-col lg:flex-row justify-between w-full">
                {data.images?.[0] && (
                <Image
                    onClick={() => {
                        setPhotoIndex(0);
                        setIsOpen(true);
                    }}
                    className="cursor-pointer w-full lg:max-w-96 h-[22rem] object-cover rounded-lg" 
                    src={data.images[0]} 
                    width={400} 
                    height={400} 
                    alt="Imagem principal do apartamento"
                    priority
                />
                )}
                <div className="flex flex-row gap-4 lg:gap-0 lg:flex-col justify-between">
                {data.images?.slice(1).map((img: string, index: number) => (
                    <Image 
                        key={index}
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                        className="cursor-pointer max-w-40 object-cover rounded-lg" 
                        src={img} 
                        width={400} 
                        height={400} 
                        alt={`Imagem secundária ${index + 1}`} 
                    />
                ))}
                </div>
            </div> 

            {isOpen && (
                <Lightbox
                    mainSrc={data.images[photoIndex]}
                    nextSrc={data.images[(photoIndex + 1) % data.images.length]}
                    prevSrc={data.images[(photoIndex + data.images.length - 1) % data.images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + data.images.length - 1) % data.images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % data.images.length)
                    }
                />
            )}
        </>
    )
}