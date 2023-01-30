import NavBar from "components/NavBar";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import ImageBackup from "./ReplaceImg.png";
import { useDarkMode } from "usehooks-ts";

import Image from "next/image";
import {
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EyeSlashIcon,
  FilmIcon,
  LanguageIcon,
  PencilIcon,
  PlayPauseIcon,
  StarIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Language } from "@mui/icons-material";
import Footer from "components/Footer";
function ResultInfo() {
  const router = useRouter();
  const [imdbID, setImdbID] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const [getdarkmode, setgetdarkmode] = useState(false);


  useEffect(()=> {

      if(isDarkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");

      }
      else {
        document.body.classList.add("light");
      document.body.classList.remove("remove");

      }
    },[])

     
  


  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id;
      setImdbID(id);
      async function getinfo() {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=19d18a42`
        );
        console.log(data);
        setMovieInfo(data);
        setLoading(false);
      }
      getinfo();
    }
  }, [router.isReady]);

  return (
 
  <div className="">
    <Toaster/>

<Head>
  <title>{movieInfo.Title}</title>
</Head>
<NavBar />
<div>
  {loading ? (
    <div className="md:flex md:justify-center  mt-10 md:space-x-2">
      <div className="flex justify-center">
        <div className="w-[350px] h-[500px] bg-gray-300 mt-15 rounded-lg"></div>
      </div>

      <div>
        <div className="w-[350px] h-8 bg-gray-300 rounded-lg mt-10 ml-2 mb-10 md:mt-4"></div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 md:mb-10 bg-gray-300">
          {" "}
        </div>
        <div className="flex w-[300px] h-4 rounded-lg  items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex w-[300px] h-4 rounded-lg  items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex w-[300px] h-4 rounded-lg  items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
        <div className="flex  w-[300px] h-4 rounded-lg items-center mb-4 bg-gray-300">
          {" "}
        </div>
      </div>
    </div>
  ) : (
    <div className="mb-5 mt-10 ">
      <div className="md:flex md:justify-center z-100 md:space-x-4 md:w-full">
        <div className="flex justify-center mt-13">
          <Image
            src={movieInfo.Poster || ImageBackup}
            width={300}
            height={100}
            alt="movie poster"
            className="rounded-lg shadow-xl w-[350px] md:w-[300px] md:h-[500px] md:shadow-xl lg:w-[350px] lg:h-[550px]"
          />
        </div>

        <div className="mt-10 ml-2 mb-10 md:mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-[30px] text-red-500"> |</p>
            <h1 className="text-[30px] font-bold"> {movieInfo.Title}</h1>
          </div>

          <div className="ml-2 mt-4  space-y-4">
            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <StarIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">IMDB Rating: </span>
              </div>
              <p>{movieInfo.imdbRating}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <CurrencyDollarIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">BoxOffice: </span>
              </div>
              <p>{movieInfo.BoxOffice}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <UserGroupIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Actors: </span>
              </div>
              <p>{movieInfo.Actors}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <CalendarDaysIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Released: </span>
              </div>
              <p>{movieInfo.Released}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <VideoCameraIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Director: </span>
              </div>
              <p>{movieInfo.Director}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <PencilIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Writer: </span>
              </div>
              <p>{movieInfo.Writer}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <AdjustmentsHorizontalIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Type: </span>
              </div>
              <p>{movieInfo.Type}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <FilmIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Genre: </span>
              </div>
              <p>{movieInfo.Genre}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <BookOpenIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Plot: </span>
              </div>
              <p>{movieInfo.Plot}</p>
            </div>

            <div className="flex w-full max-w-[400px] ">
              <div className="flex space-x-2 mr-2">
                <LanguageIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Language: </span>
              </div>
              <p>{movieInfo.Language}</p>
            </div>

            <div className="flex w-full max-w-[400px] sm:hidden ">
              <div className="flex space-x-2 mr-2">
                <EyeSlashIcon className="h-5 mt-1" />
                <span className="font-bold mr-2">Rated: </span>
              </div>
              <p>{movieInfo.Rated}</p>
            </div>

            <div className="flex w-full max-w-[400px] sm:hidden ">
              <div className="flex space-x-2 mr-2">
                <PlayPauseIcon className="h-5 mt-1" />
                <span className="font-bold mr-2 ">Runtime: </span>
              </div>
              <p>{movieInfo.Runtime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

<Footer />
</div>)}
   
    
  



export default ResultInfo;
