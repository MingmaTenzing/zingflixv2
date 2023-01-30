import { Bars3Icon, SunIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import logo from '../src/assests/logo.svg'
import { useDarkMode } from "usehooks-ts"
import { toast } from "react-hot-toast"
import { Toaster } from "react-hot-toast";



function NavBar() {

  const { isDarkMode, toggle, enable, disable } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light')
    }
    else {
       document.body.classList.add('light');
      document.body.classList.remove('dark')

    }
  })
  

  function togglefunction() {
    toggle();
    if (isDarkMode) {
toast.success("Light Mode Enabled")

  }
  if (!isDarkMode) {
toast.success("Dark Mode Enabled")


}
  }


  return (
    <div className=''>
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
         
          <SunIcon onClick={togglefunction} className="h-7 hover:rotate-180  hover:scale-125 transition ease-out delay-100" />
          <Bars3Icon className="h-6 " />
        </div>
      </div>

    </div>
  )
}
export default NavBar;