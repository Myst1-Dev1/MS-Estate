'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../../public/images/marker-icon.png";
import Image from "next/image";

const customIcon = new L.Icon({
    iconUrl: markerIcon.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

interface MapProps {
    latitude:string;
    longitude:string;
    localImage:string;
    title:string;
    bedroom:number;
    price:number
}

export function Map({ latitude, longitude, localImage, title, bedroom, price }:MapProps) {
    const position = [latitude, longitude];

    return (
        <>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                    <Marker position={position} icon={customIcon}>
                    <Popup>
                        <div className="flex gap-3 items-center w-60">
                            <Image src={localImage || "/images/bg.webp"} className="rounded-lg h-24 object-cover w-28" width={400} height={400} alt="imagem do local" />
                            <div className="flex flex-col gap-2">
                                <h6 className="text-blue-400 text-sm font-bold">{title}</h6>
                                <span className="flex">{bedroom} bedroom</span>
                                <span className="font-bold">${price}</span>
                            </div>
                        </div>
                        
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}