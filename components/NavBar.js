import { Bars3Icon, SunIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import logo from '../src/assests/logo.svg'
import SearchBar from "./SearchBar"



function NavBar() {
  const [theme, setTheme] = useState('');


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light')
    }
    console.log(theme);
  }
  
  
useEffect(() => {
  localStorage.setItem('theme', theme)


},[theme])

  return (
    <div className={`${theme} `}>
         <div className="flex items-center justify-between p-3 z-100">
       <Link href={`/`}> <Image
          className="object-cover h-10 w-30 "
          src={logo}
          alt=""
          width={120}
          height={100}
        />
        </Link>
        <div className="flex space-x-2 items-center ">
         
          <SunIcon onClick={() => toggleTheme()} className="h-7 hover:rotate-180  hover:scale-125 transition ease-out delay-100" />
          <Bars3Icon className="h-6 " />
        </div>
      </div>

    </div>
  )
}
export default NavBar