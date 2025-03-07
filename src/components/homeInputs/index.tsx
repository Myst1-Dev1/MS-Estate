'use client';

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomeInputs() {
    "use client";

  const router = useRouter();
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [type, setType] = useState("buy");

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (city) query.append("city", city);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (type) query.append("type", type);

    router.push(`/results?${query.toString()}`);
  };

    return (
        <>
            <div>
                <div className="flex">
                    <span
                    className={`max-w-24 text-center w-full block p-3 cursor-pointer transition-all duration-500 ${
                        type === "buy" ? "bg-black text-white" : "border border-gray-300"
                    } hover:bg-yellow-500`}
                    onClick={() => setType("buy")}
                    >
                    Buy
                    </span>
                    <span
                    className={`max-w-24 text-center w-full block p-3 cursor-pointer transition-all duration-500 ${
                        type === "rent" ? "bg-black text-white" : "border border-gray-300"
                    } hover:bg-yellow-500`}
                    onClick={() => setType("rent")}
                    >
                    Rent
                    </span>
                </div>
                <div className="flex justify-between w-full border border-gray-300">
                    <input
                    type="text"
                    className="bg-none focus:outline-none focus:border-r-2 focus:border-gray-300 p-3 w-full"
                    placeholder="City Location"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                    type="text"
                    className="bg-none focus:outline-none focus:border-r-2 focus:border-gray-300 p-3 w-full"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                    type="text"
                    className="bg-none outline-none p-3 w-full"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <div
                    className="cursor-pointer w-14 h-14 bg-yellow-500 text-white text-xl px-5 grid place-items-center transition-all duration-500 hover:bg-yellow-700"
                    onClick={handleSearch}
                    >
                    <FaSearch />
                    </div>
                </div>
            </div>
        </>
    )
}