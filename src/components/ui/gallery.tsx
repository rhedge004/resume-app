import { basePath } from "@/lib/utils";
import Image from "next/image";

// WIP
function GalleryComponent() {
  const galleryImages = [
    {
      id: 1,
      src: `${basePath}/image.png`,
      alt: "Main Feature",
      position: "center",
    },
    {
      id: 2,
      src: `${basePath}/image.png`,
      alt: "Thumbnail Top",
      position: "top",
    },
    {
      id: 3,
      src: `${basePath}/image.png`,
      alt: "Thumbnail Left",
      position: "left",
    },
    {
      id: 4,
      src: `${basePath}/image.png`,
      alt: "Thumbnail Right",
      position: "right",
    },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "center":
        return "absolute inset-0 w-full h-full object-cover z-20 shadow-2xl rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer";
      case "top":
        return "absolute top-[-4rem] left-1/2 -translate-x-1/2 w-48 h-48 sm:w-60 sm:h-60 object-cover z-10 rotate-[-5deg] rounded-lg shadow-lg opacity-70 transition-all duration-500 hover:rotate-[-2deg] hover:opacity-100 hidden sm:block";
      case "left":
        return "absolute top-1/2 left-[-6rem] -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 object-cover z-10 rotate-[8deg] rounded-lg shadow-lg opacity-70 transition-all duration-500 hover:rotate-[4deg] hover:opacity-100 hidden sm:block";
      case "right":
        return "absolute top-1/2 right-[-6rem] -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 object-cover z-10 rotate-[-8deg] rounded-lg shadow-lg opacity-70 transition-all duration-500 hover:rotate-[-4deg] hover:opacity-100 hidden sm:block";
      default:
        return "";
    }
  };
  return (
    <div className="flex flex-col min-h-[300px] p-4 sm:p-8">
      <div className="relative w-full max-w-2xl h-[30rem] mx-auto group">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`
              ${getPositionClasses(image.position)}
              border-4 border-white 
              overflow-hidden
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={240}
              width={240}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { GalleryComponent };
