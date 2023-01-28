import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ImageBackup from '../src/assests/ReplaceImg.png'

function Template({ movie }) {
  const router = useRouter();
  console.log(movie);

  

  
    return (
      <div
        className="my-4 cursor-pointer hover:scale-110 transition-all ease-out 100 flex items-center flex-col "
        onClick={() => router.push(`/info/${movie.imdbID}`)}
      >
       
     

        <Image
        placeholder="empty"
          src= {movie.Poster}
          className="object-cover rounded-lg hover:shadow-xl shadow-lg"
          alt={movie.Title}
          width={200}
          height={300}
        
          

        />
        <h1 className="font-bold flex items-center w-full max-w-[200px] justify-center">
          {movie.Title}{" "}
        </h1>
        <h1 className="text-">{movie.Year} </h1>
        <p className="text-[12px] text-gray-500">{movie.Type.toUpperCase()}</p>
      </div>
    );
  }

  

export default Template;
