import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import axios from "axios";
import { useDarkMode } from "usehooks-ts";

import {
  Bars3Icon,
  BeakerIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Template from "components/Template";
import { useRouter } from "next/router";
import SearchBar from "components/SearchBar";
import NavBar from "components/NavBar";
import bgwhite from "../assests/bg-white.png";
import bgblack from "../assests/bg-black.png";
import Footer from "components/Footer";
import logo from "../assests/logo.svg";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import Rotten from "../assests/rotten.svg";
import imdb from "../assests/imdb.svg";
import tmdb from "../assests/tmdb.svg";
import { Star, StarHalf } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get(
        "https://www.omdbapi.com/?s=fast&apikey=19d18a42"
      );
      setMovies(data.Search);
      setLoading(false);
    }

    fetchdata();
  }, []);

  return (
    <>
      <Toaster />
      <Head>
        <title>ZingFlix</title>
        <meta name="description" content="Generated by create`app ` app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="">

    
        <NavBar />

        <div className="  flex flex-col items-center  mt-[20px]  ">
          <Image
            alt=""
            src={logo}
            height={100}
            width={100}
            className=" w-[150px] inline sm:w-[200px] -mb-4 "
          />

          <div className=" text-center  px-4">
            {session ? (
              <>
                {" "}
                <h1 className="text-lg font-bold sm:-mt-10">
                  Welcome, {session.user.name}{" "}
                  <span className=" animate-wiggle">👋 </span>
                </h1>
              </>
            ) : (
              <h1 className="text-lg font-bold sm:-mt-10">
                Unlimited movies, Tv shows, and more
              </h1>
            )}
            {session ? (
              <></>
            ) : (
              <p className="text-md mt-2 ">
                Watch anywhere, Cancel at any time
              </p>
            )}
            <p className="text-md  mt-2 mb-4 ">
              Get started by searching your favorites movie or Tv show
            </p>{" "}
          </div>
        </div>
        <SearchBar />

        <div className="  mt-10 flex items-center flex-col space-y-2 ">
          <div className="flex">
            <Star className="w-5" />
            <Star className="w-5" />
            <Star className="w-5" />
            <Star className="w-5" />
            <StarHalf className="w-5" />
          </div>
          <h1 className="grayscale   font-light"> RECOMMENDED BY TOP SITES </h1>
          <div className=" flex  pt-4  space-x-3 lg:space-x-20  justify-around px-4">
            <div className=" -z-0 flex flex-col items-center space-y-2">
              <Image
                src={imdb}
                className="grayscale brightness-120"
                alt="rotten tomatoes"
                height={50}
                width={50}
              />
              <h1 className="max-w-[200px]   font-sans font-extralight text-center  text-[12px] md:text-sm before:italic  grayscale">
                {" "}
                &quot; ZingFlix is one of the best resources for movies and
                series online&quot;
              </h1>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src={tmdb}
                className="grayscale brightness-120"
                alt="rotten tomatoes"
                height={50}
                width={50}
              />
              <h1 className="max-w-[200px]  font-sans font-extralight text-center text-[12px] md:text-sm before:italic grayscale">
                {" "}
                &quot; Just amazing!!. Compilation of simplicity with huge
                library &quot;
              </h1>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src={Rotten}
                className="grayscale brightness-120"
                alt="rotten tomatoes"
                height={50}
                width={50}
              />
              <h1 className="max-w-[200px]  font-sans font-extralight text-center text-[12px] md:text-sm before:italic grayscale">
                {" "}
                &quot; ZingFlix! the name explains itself&quot;
              </h1>
            </div>
          </div>
        </div>

        {/* Recommended */}

        <div className="mt-10  pt-10 sm:mt-[20px] ">
          <div className="flex items-center">
            <MinusIcon className=" h-7 rotate-90 text-red-400" />
            <h1 className="text-lg font-bold">Recommended </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 space-x-3 p-4 mt-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:space-x-6 lg:justify-center">
          {loading ? (
            new Array(10).fill(0).map((element, index) => (
              <div key={index} className="mb-4">
                <div className="title bg-gray-300 h-[300px] w-[200px] rounded-lg ">
                  {" "}
                </div>
                <div className="bg-gray-300 h-2 w-[200px] mt-2  rounded-lg">
                  {" "}
                </div>
                <div className="bg-gray-300 h-2 w-[200px] mt-2 rounded-lg">
                  {" "}
                </div>
                <div className="bg-gray-300 h-2 w-[200px] mt-2 rounded-lg">
                  {" "}
                </div>
              </div>
            ))
          ) : (
            <>
              {movies.map((movie) => (
                <Template key={movie.imdbID} movie={movie} />
              ))}
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
