'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../../public/images/marker-icon.png";
import Image from "next/image";
import { Post } from "@/types/post";

const customIcon = new L.Icon({
    iconUrl: markerIcon.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

interface ResultsMapProps {
    post:Post[];
}

export function ResultsMap({ post }:ResultsMapProps) {
    const defaultPosition: [number, number] = post.length > 0
    ? [parseFloat(post[0].latitude), parseFloat(post[0].longitude)]
    : [51.505, -0.09];

    return (
        <>
            <MapContainer
                center={defaultPosition}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {post.map((post) => (
                    <Marker
                    key={post.id}
                    position={[parseFloat(post.latitude), parseFloat(post.longitude)]}
                    icon={customIcon}
                    >
                    <Popup>
                        <div className="flex gap-3 items-center w-60">
                        <Image
                            src={post.images[0] || "/images/bg.webp"}
                            className="rounded-lg h-24 object-cover w-28"
                            width={400}
                            height={400}
                            alt="imagem do local"
                        />
                        <div className="flex flex-col gap-2">
                            <h6 className="text-blue-400 text-sm font-bold">{post.title}</h6>
                            <span className="flex">{post.bedroom} bedroom</span>
                            <span className="font-bold">${post.price}</span>
                        </div>
                        </div>
                    </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}