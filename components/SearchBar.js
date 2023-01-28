import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router";
import { useState } from "react";


function SearchBar({darkmode, searchquery}) {
    const [search, setSearch] = useState('');
    const router = useRouter();
    function Search(event) {
   
        setSearch(event)
    
      
      }


      function startsearch(event) {
        event.preventDefault();
        console.log('it works')
        router.push(`/search/${search}`);



      }
  return (
    <div>


           <form className={` ${darkmode} flex border rounded-full w-full max-w-[300px] sm:max-w-[400px] m-auto bg-white  p-2 shadow-md hover:shadow-lg transition ease-out  `} >
          <input type="text" placeholder={searchquery} onChange={(event) => Search(event.target.value)} className={` outline-none flex-1 pl-2  text-black`} ></input>

         <button  onClick={(event) => startsearch(event)} ><MagnifyingGlassIcon className="h-7 mr-2 cursor-pointer text-black"/></button> 
     
        </form>
    </div>
  )
}
export default SearchBar