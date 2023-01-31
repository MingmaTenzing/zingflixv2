import { Bars3Icon, EnvelopeIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../src/assests/logo.svg";
import reacticon from "../src/assests/React.png";
import nextjsicon from "../src/assests/nextjs.png";
import htmlicon from "../src/assests/html.png";
import jsicon from "../src/assests/JavaScript.png";
import cssicon from "../src/assests/css.png";
import tailwindicon from "../src/assests/tailwind.png";
import profile from "../src/assests/profile.jpg";
import { useDarkMode } from "usehooks-ts";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useSession, signIn, signOut } from "next-auth/react";
import emailjs from "@emailjs/browser";

import { useToggle } from "usehooks-ts";

import { SidebarElement, SidebarService } from "sidebarjs";
import "sidebarjs/lib/sidebarjs.css";

function NavBar() {
  const { data: session } = useSession();
  const form = useRef();
const [sentmessage, setsentmessage] = useState(false);

  const [modal, setModal] = useState(false);
  

  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

  function togglefunction() {
    toggle();
    if (isDarkMode) {
      toast.success("Light Mode Enabled");
    }
    if (!isDarkMode) {
      toast.success("Dark Mode Enabled");
    }
  }

  function sendEmail(event) {
    event.preventDefault();
   
    

     emailjs.sendForm('service_spab4la','template_qr9voxf', form.current, '5lDQ2fsinXAaz-OgN').then((result) => { 
      console.log(result.text);
      toast.success("Your email has been sent successfully. I'll reach out to you soon")
      setsentmessage(true);
     
      
     },
     (error) => {
      console.log(error.text);
     });
    

    

    

  }

  function modalfunction() {
   setModal((modal) => (!modal))
    console.log(modal)
  }

  return (
    <div className="">
      {modal && (  <div className="md:flex md:overflow-hidden overflow-hidden  md:max-w-[600px] drop-shadow-2xl w-[400px] md:w-[600px] text-black z-10 bg-gray-200 rounded-xl  h-[600px] border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none">
      
      <div className="flex flex-col items-center w-full pb-2  pt-2  bg-white">
        <div className=" md:hidden w-full flex justify-end pr-4">
          <XMarkIcon onClick={() => modalfunction()} className="h-6 cursor-pointer"/>

        </div>
        <div className="space-y-3 md:pt-20">
          <div className="flex  justify-center mt-5">
          <Image  src={profile} alt='' width={90} height={50} className='rounded-full'/>
          </div>
          <h1 className="text-center text-lg font-bold mt-6">
            {" "}
            Mingma Tenzing Sherpa
          </h1>
          <h1 className="text-center">
            I&apos;m currently open for{" "}
            <span className=" text-red-600 font-bold"> opportunities </span>
          </h1>
          <h1 className="text-center">I would love to hear from you</h1>
        </div>

        <div className="hidden md:flex md:space-x-10  flex-wrap space-y-5 justify-center items-center p-4">
       
        <Image
            src={reacticon}
            width={60}
            height={40}
            alt=""
            className="w-12 "
          />
          <Image
            src={nextjsicon}
            width={80}
            height={40}
            alt=""
            className=" w-12 "
          />
          <Image
            src={htmlicon}
            width={80}
            height={100}
            alt=""
            className="w-12"
          />
          <Image
            src={jsicon}
            width={80}
            height={100}
            alt=""
            className=" w-12"
          />
          <Image
            src={cssicon}
            width={60}
            height={40}
            alt=""
            className=" w-12 "
          />
          <Image
            src={tailwindicon}
            width={60}
            height={40}
            alt=""
            className="w-12 "
          />
        </div>

        

        </div>
       

        <div className=" w-full  text-white bg-infobg  md:pt-5">
        <div className=" hidden md:flex w-full  justify-end pr-4 pb-20">
          <XMarkIcon onClick={() => modalfunction()} className="h-6 cursor-pointer"/>

        </div>
          <form ref={form} onSubmit={(event) => sendEmail(event)} className='space-y-5 p-4'>
            <div className="px-3 flex flex-col">
            <label>Name: </label>
            <input type='text' name="user_name" className="  h-10 bg-transparent border-b outline-none  focus:border-b-red-800" required />
            </div>
            <div className="px-3 flex flex-col">
            <label>Email Address: </label>
            <input type="email"  name='user_email' className=" bg-transparent border-b  outline-none h-10  focus:border-b-red-800" required/>
            </div>
            <div className="px-3 flex flex-col">
            <label>Message: </label>
            <input type='text'  name="message" className="flex-grow  bg-transparent border-b outline-none h-[60px]  focus:border-b-red-800" required />
            </div>

          
{
  sentmessage? (<>
            <button type="submit" disabled value='Send' className="bg-red-600 grayscale px-3 py-2 rounded-lg text-white ml-20 sm:ml-24 md:ml-10" onSubmit={(event) => sendEmail(event)}>Send Your Message</button>

 </> ):(
            <button type="submit" value='Send' className="bg-red-600 px-3 py-2 rounded-lg text-white ml-20 sm:ml-24 md:ml-10" onSubmit={(event) => sendEmail(event)}>Send Your Message</button>

 )
}
    
         

          </form>
        </div>

        




      </div>)}
    
    



      <div className="flex items-center justify-between p-3 z-100">
        <Link href={`/`}>
          {" "}
          <Image
            className="object-cover h-7 w-30 "
            src={logo}
            alt=""
            width={120}
            height={100}
          />
        </Link>
        <div className="flex space-x-4 items-center ">
          <SunIcon
            onClick={togglefunction}
            className="h-7 hover:rotate-180  hover:scale-125 transition ease-out delay-100"
          />

          <EnvelopeIcon
            className="h-6 cursor-pointer hover:scale-125 transition ease-out delay-200
             "
            onClick={() => modalfunction()
            }
          />
          {!session && (
            <button
              className=" px-3 py-2 bg-red-600 rounded-xl text-center text-white text-sm"
              onClick={() => signIn()}
            >
              {" "}
              Sign In
            </button>
          )}
          {session && (
            <>
              <img
                src={session.user.image}
                onClick={() => signOut()}
                className="h-10 rounded-full cursor-pointer"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default NavBar;
