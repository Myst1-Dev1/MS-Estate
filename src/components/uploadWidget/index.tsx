"use client";

import { useEffect, useState } from "react";

interface UploadWidgetProps {
  setState: (url: string) => void;
  multiple: boolean;
}

function UploadWidget({ setState, multiple }: UploadWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const openUploadWidget = () => {
    if (!loaded || !window.cloudinary) return;

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: "MS Estate",
        folder: "avatars",
        multiple,
        maxImageFileSize: 2000000,
      },
      (error: any, result: any) => {
        if (!error && result.event === "success") {
          setState((prevState: string[]) => [...prevState, result.info.secure_url]);
        }
      }
    );
    widget.open();
  };

  return (
    <button className="bg-blue-500 text-white p-2 rounded" onClick={openUploadWidget} disabled={!loaded}>
      {loaded ? "Upload Image" : "Carregando..."}
    </button>
  );
}

export default UploadWidget;
