import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

// Configurar Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const file = req.body.file; // Base64 ou URL do arquivo

      const uploadResponse = await cloudinary.v2.uploader.upload(file, {
        folder: "avatars", // Pasta no Cloudinary
        upload_preset: "MS Estate", // Opcional, conforme seu preset
      });

      return res.json({ url: uploadResponse.secure_url });
    } catch (error) {
      return res.status(500).json({ error: "Erro no upload" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
