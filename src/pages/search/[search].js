import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "components/NavBar";
import Template from "components/Template";
import Footer from "components/Footer";
import { toast, Toaster } from "react-hot-toast";
import SearchBar from "components/SearchBar";
import {
  ArrowLongRightIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

import { useDarkMode } from "usehooks-ts";

function Search() {
  const router = useRouter();
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  console.log(isDarkMode);

  const searchquery = router.query.search;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagenumber, setPagenumber] = useState(1);

  const [type, setType] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

  useEffect(() => {
    setLoading(true);

    async function searchResult() {
      const { data } = await axios.get(
        `        https://www.omdbapi.com/?s=${searchquery}&type=${type}&page=${pagenumber}&apikey=19d18a42`
      );
      setResults(data.Search);

      setLoading(false);
    }
    searchResult();
  }, [searchquery, type, pagenumber]);

  function Type(event) {
    setType(event);
    console.log(event);
  }

  function nextPage() {
    console.log("it works");
    setPagenumber(pagenumber + 1);
  }

  function prevPage() {
    setPagenumber(pagenumber - 1);
  }

  if (results !== undefined) {
    return (
      <div className="">
        <Head>
          <title>{searchquery}</title>
        </Head>
        <Toaster />

        <NavBar />

        <div className="flex justify-center mt-8">
          <SearchBar searchquery={searchquery} />
        </div>
        <div className="">
          <div>
            <h1 className="font-bold mt-5 lg:text-lg text-center">
              {" "}
              Search Results for{" "}
              <span className="text-red-600">{searchquery}</span>
            </h1>
          </div>

          <div className=" w-full max-w-[1200px] p-3 flex items-center justify-end space-x-2">
            <label>Filter:</label>
            <select
              className="border text-black rounded-full p-1"
              name="genres"
              onChange={(event) => Type(event.target.value)}
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode  ">Episode</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 p-2 items-center mt-2 space-x-3 space-y-4 md:grid-cols-3 lg:flex lg:flex-wrap lg:space-x-6 lg:justify-center">
          {loading ? (
            new Array(10).fill(0).map((_, index) => (
             
              <div key={index} className="">
               
                <div className="title bg-gray-300 h-[300px] w-[180px] md:w-[200px] rounded-lg "></div>
                <div className="bg-gray-300 h-2 w-[150px] mt-2  rounded-lg"></div>
                <div className="bg-gray-300 h-2 w-[150px] mt-2 rounded-lg">
                  {" "}
                </div>
                <div className="bg-gray-300 h-2 w-[100px] mt-2 rounded-lg">
                  {" "}
                </div>
               
              </div>
           
            ))
          ) : (
            <>
              {results
                .filter((movie) => movie.Poster !== "N/A")
                .map((movie) => (
                  <Template key={movie.imdbID} movie={movie} />
                ))}
            </>
          )}
        </div>

        <div className="flex justify-center mb-5 space-x-5">
          {pagenumber <= 1 ? (
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => nextPage()}
            >
              <ArrowSmallRightIcon className="w-7 " />
              <h1 className="text-sm"> Next Page</h1>
            </div>
          ) : (
            <>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => prevPage()}
              >
                <ArrowSmallLeftIcon className="w-7 " />
                <h1 className="text-sm"> Previous Page</h1>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => nextPage()}
              >
                <ArrowSmallRightIcon className="w-7 " />
                <h1 className="text-sm"> Next Page</h1>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    );
  } else {
    router.push("/");
    alert("No results found");
  }
}
export default Search;
