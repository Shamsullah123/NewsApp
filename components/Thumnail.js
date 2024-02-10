import React, { forwardRef } from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const Thumnail = forwardRef(({ result }, ref) => {
  // const BASE_PATH = 'https://image.tmdb.org/t/p/original/'
  // console.log("Result in Thumnail Componet is", result.title);
  // console.log("Result in Thumnail", result)
  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        // src={
        //   result.urlToImage
        //     ? result.urlToImage
        //     : "https://s.yimg.com/os/creatr-uploaded-images/2024-01/6edeca90-b72d-11ee-b89f-e9d774e89775"
        // }

        src = "https://s.yimg.com/os/creatr-uploaded-images/2024-01/6edeca90-b72d-11ee-b89f-e9d774e89775"

      />
      <div className="p-2">
        <p className="max-w-screen-md truncate">{result.overview}</p>
        <h2 className="mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} +`}{" "}
          {result.release_date || result.first_air_date} +{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {result.content}
        </p>
      </div>
    </div>
  );
});

export default Thumnail;
