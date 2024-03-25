import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Finesse: Inspire your CSS",
    short_name: "Finesse",
    description:
      "A collection of CSS snippets and generators to inspire your next project.",
    start_url: "/",
    display: "standalone",
    background_color: "#1E283A",
    theme_color: "#1E283A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
