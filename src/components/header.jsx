import { useMediaQuery } from "react-responsive";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [showMenu, setShowMenu] = useState(false);

  const mobileMenuNavigate = () => {
    setShowMenu((oldState) => {
      return !oldState;
    });
  };

  return (
    <div className="sticky-header">
      <div
        className={`top-[8vh] absolute w-full p-4 flex  ${
          showMenu ? "block" : "hidden"
        } ease-in-out transition-opacity lg:hidden bg-white`}
      >
        <ul className="flex flex-col items-center justify-between gap-4 mx-auto">
          <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-4">
            <a href="#" className="">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
            <a href="#about">About </a>
          </li>
          <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </div>

      <header className=" flex items-center justify-between w-[95%] mx-auto p-4 h-[8vh]">
        <div className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1.5rem] font-semibold uppercase ease-in-out transition p-2">
          Hussien Essam
        </div>

        {isDesktopOrLaptop ? (
          <ul className="flex items-center justify-between gap-4 ">
            <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-4">
              <a href="#" className="">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
              <a href="#about">About </a>
            </li>
            <li className="text-black hover:text-[#0062b9cc] cursor-pointer text-[1rem] font-semibold uppercase ease-in-out transition p-2">
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        ) : (
          <div>
            <GiHamburgerMenu
              onClick={mobileMenuNavigate}
              style={{
                fontSize: "1.5rem",
                color: "#0062b9cc",
              }}
              className={`${
                showMenu ? "hidden" : "block"
              } ease-in-out transition-opacity `}
            />

            <IoMdClose
              onClick={mobileMenuNavigate}
              style={{
                fontSize: "1.5rem",
                color: "#0062b9cc",
              }}
              className={`${
                showMenu ? "block" : "hidden"
              } ease-out transition-all `}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
