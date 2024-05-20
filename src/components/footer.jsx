import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="flex items-center justify-between w-full bg-black ">
      <div className="flex items-center justify-between w-[95%] mx-auto p-4 flex-col  lg:flex-row">
        <p className="text-white hover:text-[#0062b9cc] cursor-pointer text-[1.5rem] font-semibold uppercase ease-in-out transition p-2">
          Hussien Essam
        </p>
        <div className="flex flex-col gap-2 p-2 ">
          <p className="text-white hover:text-[#0062b9cc] cursor-pointer text-[1.5rem] font-semibold uppercase ease-in-out transition p-2">
            social
          </p>
          <div className="flex items-center justify-between gap-4">
            <a href="https://www.linkedin.com/in/hussien-essam-62340021b/">
              <FaLinkedinIn
                className="text-white hover:text-[#0062b9cc] cursor-pointer ease-in-out transition "
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </a>
            <a href="https://github.com/flavasava2022">
              <FaGithub
                className="text-white hover:text-[#0062b9cc] cursor-pointer  ease-in-out transition"
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
