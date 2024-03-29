import { MinusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../src/assests/logo.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import {
  FacebookOutlined,
  GitHub,
  LinkedCameraOutlined,
  LinkedIn,
} from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
function Footer() {
  return (
    <div className="border-t">
      <div className="flex items-center justify-center">
        <Link href="/">
          {" "}
          <Image src={logo} alt="zingflix log" width={120} height={120} />{" "}
        </Link>
        <MinusIcon className="h-10 opacity-25 rotate-90" />
        <div className="flex space-x-3 ">
          <InstagramIcon />

          <FacebookOutlined />

          <Link target="_blank" href="https://github.com/MingmaTenzing">
            <GitHub />
          </Link>

          <LinkedInIcon />
        </div>
      </div>
      <h1 className="flex text-sm justify-center pb-5">
        Mingma Tenzing Sherpa Copyright@2023{" "}
      </h1>
    </div>
  );
}
export default Footer;
