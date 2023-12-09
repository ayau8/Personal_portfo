import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const nextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1 ) return imageUrls.length - 1;
      return index + 1;
    });
  };


  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={imageUrls[imageIndex]}
        className="w-full h-full object-center block"
      />
      <button
        className="text-black bg-gray-500/20 block absolute top-0 bottom-0 left-0 p-2 cursor-pointer hover:bg-gray-900/40 duration-300 ease-out"
        onClick={prevImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="text-black bg-gray-500/20 block absolute top-0 bottom-0 right-0 p-2 cursor-pointer hover:bg-gray-900/40 duration-300 ease-out"
        onClick={nextImage}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
