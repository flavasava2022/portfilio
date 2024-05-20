function Home() {
  return (
    <div className="w-full">
      <div className="parallax flex items-center justify-center min-h-[75vh]">
        <div className="flex items-center justify-evenly gap-4 flex-col p-4 h-[30vh]">
          <h1 className="text-[3rem] font-bold py-4  uppercase text-white">
            Hello, MY NAME IS hussien essam
          </h1>
          <p className="text-[1.5rem]  text-white uppercase lg:w-[60%] text-center line-clamp-4 leading-[3rem]">
            I am a passionate frontend developer. My specialties are React JS ,
            javascript and Tailwind CSS, and I love building apps that are
            delightful to use.
          </p>
          <button className="p-4 w-[24rem] h-[6rem] bg-white rounded-xl text-[1.5rem] font-bold text-black uppercase transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#0062b9cc]  duration-300">
            see my projects
          </button>
        </div>
      </div>
      <div className=" w-full lg:w-[%] mx-auto flex flex-col items-center gap-4 p-4 min-h-[600px]">
        <h1 className="text-[2rem] font-bold py-4 border-b-2 border-b-[#0062b9cc]">
          PROJECTS
        </h1>
        <p className="text-[1.5rem] font-bold text-gray-400">
          All my projects include links to the code and live version. Click the
          button to learn more about each one.
        </p>
      </div>
    </div>
  );
}

export default Home;
