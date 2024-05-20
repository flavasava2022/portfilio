import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ecommerce from "../assets/ecommerce.png";
import kuna from "../assets/kuna.png";
import multiStep from "../assets/multi-step.jpg";
import hangman from "../assets/hangman.png";
const data = [
  {
    title: "E-commerce mega store",
    text: "Mega Store E-commerce is a user-friendly online marketplace. view detailed product descriptions, and make purchases.",
    Image: ecommerce,
    code: "https://github.com/flavasava2022/Mega-store-ecommerce",
    website: "https://mega-store-ecommerce.vercel.app/",
  },
  {
    title: "kuna website",
    text: "renovation of kuna website.",
    Image: kuna,
    code: "https://github.com/flavasava2022/Kuna",
    website: "https://flavasava2022.github.io/Kuna/",
  },
  {
    title: "multi step form",
    text: "registration multi step form",
    Image: multiStep,
    code: "https://github.com/flavasava2022/Multi-Step-Form",
    website: "https://flavasava2022.github.io/Multi-Step-Form/",
  },
  {
    title: "Hangman",
    text: "Hangman is a word-guessing game.",
    Image: hangman,
    code: "https://github.com/flavasava2022/hangman",
    website: "https://flavasava2022.github.io/hangman/",
  },
];

const languages = [
  "html",
  "css",
  "javascript",
  "react",
  "Tailwind CSS",
  "Redux Toolkit",
  "git",
  "problem solving",
];

function Home() {
  return (
    <div className="w-full">
      <div className="relative parallax flex items-center justify-center min-h-[80vh]">
        <div className="lg:flex items-center justify-start flex-col top-[50%] left-0 translate-y-[-50%] absolute  hidden">
          <div className="p-4 border-2 border-b-0 border-white hover:bg-[#ffffff1a] ease-in-out transition cursor-pointer">
            <a href="https://www.linkedin.com/in/hussien-essam-62340021b/">
              <FaLinkedinIn
                className="text-white"
                style={{
                  fontSize: "2rem",
                }}
              />
            </a>
          </div>

          <div className="p-4 border-2  border-white  hover:bg-[#ffffff1a] ease-in-out transition cursor-pointer">
            <a href="https://github.com/flavasava2022">
              <FaGithub
                className="text-white "
                style={{
                  fontSize: "2rem",
                }}
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-4 flex-col p-4 h-[35vh]">
          <h1 className="text-[2rem] font-bold py-4  uppercase text-white text-center">
            Hello, MY NAME IS hussien essam
          </h1>
          <p className="text-[1rem]  text-white uppercase lg:w-[60%] text-center line-clamp-4 leading-9">
            I am a passionate frontend developer. My specialties are React JS ,
            javascript and Tailwind CSS, and I love building apps that are
            delightful to use.
          </p>
          <a href="#projects">
            <button className="p-4 w-[22rem] h-[5rem] bg-white rounded-xl text-[1rem] font-bold text-black uppercase transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:text-[#0062b9cc]  duration-300">
              see my projects
            </button>
          </a>
        </div>
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto flex flex-col items-center justify-between gap-[6vh] p-4  mt-[3vh]">
        <section className="flex flex-col items-center justify-between gap-[6vh]">
          <div className="w-full mx-auto flex flex-col items-center gap-4">
            <h1
              className="text-[2rem] font-bold py-4 border-b-2 border-b-[#0062b9cc] tracking-widest"
              id="projects"
            >
              PROJECTS
            </h1>
            <p className="text-[1.5rem] font-bold text-gray-400 text-center w-[90%]">
              All my projects include links to the code and live version. Click
              the button to learn more about each one.
            </p>
          </div>
          {data.map((item, i) => {
            return (
              <div
                className="w-full project  flex flex-col lg:flex-row items-center  justify-evenly gap-2"
                key={i}
              >
                <div className="w-[90%] mx-auto  lg:w-[45%] h-[35vh] rounded-xl border-2">
                  <img
                    src={item?.Image}
                    alt=""
                    className="h-full w-full object-fit rounded-xl"
                  />
                </div>
                <div className=" py-4 h-[35vh] flex flex-col justify-evenly gap-4 items-center w-full lg:w-[45%]">
                  <h1 className="text-[1.5rem] font-bold py-4  uppercase text-center w-full">
                    {item.title}
                  </h1>
                  <p className="text-[16px]  text-gray-400  w-[80%] text-center">
                    {item.text}
                  </p>

                  <div className="w-full flex items-center justify-evenly gap-2">
                    <a href={item.website}>
                      <button className="p-4 w-[14rem]  h-[4rem] bg-[#0062b9cc] rounded-xl text-[1rem] font-bold text-white uppercase transition ease-in-out   hover:-translate-y-1 hover:scale-110   duration-300">
                        live website
                      </button>
                    </a>
                    <a href={item.code}>
                      <button className="p-4 w-[14rem]  h-[4rem] bg-[#0062b9cc] rounded-xl text-[1rem] font-bold text-white uppercase transition ease-in-out   hover:-translate-y-1 hover:scale-110   duration-300">
                        code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section
          className="flex flex-col items-center justify-between gap-[6vh]"
          id="about"
        >
          <div className="w-full mx-auto flex flex-col items-center gap-4">
            <h1 className="text-[2rem] font-bold py-4 border-b-2 border-b-[#0062b9cc] tracking-widest uppercase">
              about me
            </h1>
            <div className="flex items-center justify-between flex-wrap lg:flex-nowrap w-[90%] gap-8">
              <div className="flex justify-between gap-4 flex-col w-full lg:w-[48%]">
                <h3 className="text-[1.5rem] text-[#0062b9cc] font-bold text-center">
                  Get to know me!
                </h3>
                <p className=" text-black text-center font-semibold">
                  I am a Front End Developer passionate about creating engaging
                  and user-friendly web applications using modern web
                  development technologies. With a solid foundation in front end
                  development, I am eager to contribute my skills and knowledge
                  to a dynamic team and make a meaningful impact.
                </p>
              </div>
              <div className="flex justify-between gap-4 flex-col w-full lg:w-[48%] ">
                <h3 className="text-[1.5rem] text-[#0062b9cc] font-bold text-center">
                  My Skills
                </h3>
                <div className="flex items-center  justify-center flex-wrap gap-2  ">
                  {languages.map((item, i) => {
                    return (
                      <div className=" uppercase p-4 bg-[#0062b9cc] text-white rounded-xl">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        className="flex flex-col items-center justify-center gap-[6vh] parallax mt-[6vh] min-h-[50vh]"
        id="contact"
      >
        <div className="w-full mx-auto flex flex-col items-center gap-4">
          <h1 className="text-[2rem] font-bold py-4 border-b-2 border-white text-white tracking-widest uppercase">
            contact
          </h1>
          <p className="text-[1rem] font-bold py-4  text-white tracking-widest uppercase w-[50%] mx-auto text-center">
            Please reach out if you have any questions! Send me an email at
            Hussienessan04@gmail.com.com or call me directly at +201026524116
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
