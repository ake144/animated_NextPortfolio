"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/myImage.png"
              alt=""
              width={112}
              height={132}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-black">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg  text-black">
            I am Aklilu Tamirat, a software developer passionate about tackling real-world challenges that hold significant importance.
             I find immense joy and fulfillment in crafting solutions to complex problems within the realm of software development
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-black">
            Persistently crafting code, I am an unwavering force, tirelessly pursuing dreams.
             Trusting that each line written is a step closer to transforming lives through innovative software. 
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
  <div className="self-end">
            <svg width="206" height="66" viewBox="0 0 206 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="206" height="66" fill="#1E1E1E"/>
                          <path d="M19.3315 14.0847C14.4598 26.7514 9.90652 39.5037 5.53311 52.2864C4.72524 54.6477 2.85825 60.0076 2.10869 63.1896C2.05261 63.4277 1.89503 63.7452 2.10869 63.9165C2.725 64.4107 2.61629 62.5782 2.81372 61.8974C3.19399 60.5862 3.85456 59.5126 4.42521 58.263C7.99307 50.4502 11.0171 42.4425 14.497 34.599C18.5381 25.4906 23.68 16.1996 26.3818 6.73516C27.1564 4.02167 21.6438 9.62026 21.1444 10.6119C18.6856 15.4943 18.1704 20.9122 18.4251 26.1187C18.702 31.7825 20.3113 37.0132 23.6624 42.0293C25.5897 44.9142 28.4481 47.3858 30.0077 50.4288C30.4233 51.2399 36.5172 63.4648 37.4105 60.2417C39.3751 53.1523 26.946 49.7019 20.7416 49.7019C18.6688 49.7019 6.11041 49.7049 11.7273 51.5595C13.5571 52.1637 21.122 53.8756 22.907 52.2056C26.2431 49.0847 30.5893 45.5138 33.1299 41.9485C39.469 33.0529 42.8996 12.2272 42.8996 12.2272C42.8996 12.2272 40.8288 21.4178 39.4752 25.9571C37.6428 32.1017 31.4785 39.6356 33.8853 46.3906C34.8184 49.0093 55.2445 47.5213 58.8131 47.5213C64.0318 47.5213 66.6046 43.16 71 43.16" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M33 41H37" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M49 13C49 18.0431 49 23.0862 49 28.1293C49 29.7293 50.1836 34.4733 51.3232 35.7605C53.0675 37.7306 52.483 39.3252 52.6364 41.7501C52.7382 43.3609 55.6374 47.3847 56.4747 48.9376C60.3657 56.1535 75.1799 62.9983 79 52.9307" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M71 41C74.1707 40.3659 82.6115 34.7771 84 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M49 14C54.8706 13.553 58.8735 9.67344 64.7143 9.33333C66.9732 9.2018 68.2558 7 71 7" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M81 62C81 59.1309 81.5925 57.2184 83.7617 56.0058C85.3257 55.1315 86.3669 52.6104 88.4412 52.5228C91.8699 52.3779 94.9467 50.0116 98.2605 49.0397C99.9624 48.5405 106.145 47.7661 107.236 46.3261C107.705 45.7075 108.926 45.514 109.614 44.8275C110.732 43.7131 112.51 43.4781 113.757 42.6405C114.714 41.997 119.323 39.3836 119.625 38.2664C120.325 35.6814 117.404 33.0473 116.173 31.0977C111.265 23.3246 110.351 -5.49419 109.998 3.84046C109.83 8.27044 108.382 12.7306 109.154 17.5298C109.846 21.8365 113.304 25.9631 115.905 29.1941C118.901 32.9159 121.031 37.3694 124.036 41.2635C127.686 45.9929 133.53 47.2953 136.924 52.1582C138.092 53.8323 139.077 54.5703 138.995 56.7349C138.923 58.6352 132.144 57.6259 130.787 57.6259C126.879 57.6259 121.559 58.5558 117.937 56.8564C115.85 55.8766 111.544 55.1588 110.151 53.2518C107.372 49.4479 112.114 46.6122 115.099 46.0021C117.709 45.4687 119.826 44.3322 121.735 42.3165C122.802 41.1897 122.15 39.6912 123.116 38.6714" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M123 38.839C125.192 38.625 126.613 35.4422 127.965 33.9565C129.796 31.9455 131.305 29.3243 133.625 27.7856C135.55 26.5087 138.246 25.1082 140.5 24.4967C142.34 23.9975 143.007 23.3392 144.597 22.6997C145.808 22.2127 146.971 21.442 148.208 21.14C150.652 20.5435 143.094 21.964 140.986 23.31C138.802 24.7046 140.729 26.3136 142.028 27.5822C144.544 30.0394 146.131 32.4843 148 35.4823C149.742 38.2775 151.924 39.8527 153.903 42.3653C154.924 43.662 157.086 44.5923 158.347 45.8237C159.507 46.9561 161.059 48.4259 162.757 48.5701C165.059 48.7655 173 50.1046 173 46.7731" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M151 21.5344C151.962 17.9434 158.71 15.3915 161.016 15.3915C164.412 15.3915 170.203 12.8702 170.722 20.6243C170.867 22.7779 171.336 28.4268 170.585 30.2938C169.146 33.874 164.948 36.4856 162.731 38.8256C160.383 41.3026 153.83 40.987 151 40.987" stroke="white" stroke-width="3" stroke-linecap="round"/>
                          <path d="M173.423 48C177.123 47.5715 182.977 43.0976 186.014 40.3628C188.006 38.5679 194.129 35.8461 190.077 32.417C184.879 28.0177 179.848 24.4626 177.986 16.834C176.984 12.7261 175.501 11.9114 173.223 9.27391C172.086 7.95744 175.653 12.1281 175.821 13.9797C176.019 16.1581 177.372 17.4617 178.219 19.3026C179.839 22.8195 182.033 27.0318 184.814 29.5627C188.176 32.6213 192.236 34.6724 195.473 37.7399C197.328 39.497 198.455 38.9745 200.669 39.7071C200.815 39.7552 201.528 43.1234 201.602 40.9028C201.678 38.5957 201.602 36.2694 201.602 33.9599C201.602 24.0592 204 14.4665 204 4.60673C204 4.09749 204 0.774357 204 2.48528C204 6.42095 203.475 10.2545 203.4 14.134C203.353 16.5913 203.261 18.2884 202.501 20.5755C201.54 23.4705 202.419 27.2024 202.168 30.257C201.983 32.5104 200.641 42.276 198.005 42.4457C194.36 42.6801 192.009 42.0076 192.009 37.1999C192.009 36.4227 192.403 33.4909 191.876 32.8799C191.353 32.2741 188.457 32.4772 188.412 33.4199C188.267 36.4424 193.701 38.0245 195.007 40.6714C195.493 41.6568 197.513 43.3319 198.338 43.9885C199.685 45.0613 199.803 45.789 199.803 42.4457" stroke="white" stroke-width="3" stroke-linecap="round"/>
           </svg>
           </div>





            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-black"
            >
              SKILLS  and TOOLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
          >
              {/* <div id='works' className="w-full  rounded-lg shadow  "> */}
         <div id='programming '>
           <h3 className='text-2xl mx-20 font-bold my-9 text-black'>Programming Languages</h3>
          <div className='flex flex-row  flex-wrap w-1/2 mx-20 gap-2  cursor-pointer'>
               <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Python</button>
               <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          C++</button>
              <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                   HTml</button>
              <button type="button"  className="w-1/3 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Javascript</button>
              <button type="button"  className=" w-1/3 p-4  items-center pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              typescript</button>
               <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              css</button>
              <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              sql</button>
          </div>
         </div>
        <div id='technologies'>
           <h3 className='text-2xl mx-20 p-6 font-bold  text-black'>Technologies</h3>
           <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3   cursor-pointer'>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Nextjs</button>
            <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block  rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
         -              Bootstrap</button>
             <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          React</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                        Tailwind Css</button>
                        <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Daisyui</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
         -          Nodejs</button>
             <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Material ui</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                        Redux</button>
           </div>
        </div>
        <div id='serverless'>
             <h3 className='text-2xl mx-20 p-6 font-bold  text-black '>Serverless</h3>
             <div className='flex flex-row  flex-wrap w-1/2 mx-20 gap-2  cursor-pointer'>
               <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            AuthO</button>
                <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block items-center rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                SupaBase  </button>
                <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Firebase</button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                    Prisma</button>
                

             </div>
        </div>
        <div>
           <h3 className='text-2xl mx-20 p-6 font-bold  text-black' >Database and Deployment</h3>
          <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3 cursor-pointer '>
            <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Postgresql </button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
            Vercel</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Sql </button>
              <button type="button"  className="w-1/2 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                python Everywhere</button>
          </div>
        </div>
        <div>
           <h3 className='text-2xl mx-20 p-6 font-bold text-black'>Softwares and Tools</h3>
          <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3  cursor-pointer'>
                 <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Vscode </button>
                <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Git </button>
                <button type="button"  className="w-1/3 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                  Figma</button>
                <button type="button"  className="w-1/2 p-4  pointer-events-none inline-block  rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                 Pycharm</button>
          </div>
    </div>
    {/* </div> */}
    </motion.div>

            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold text-black rounded-b-lg rounded-s-lg">
                    ML Internship
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black">
                    Internship at prodigy InfoTech in Machine Learning. I have gained a deep understanding in deep learning, neural networks and vast areas of AI.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm text-black font-semibold w-fit">
                  prodigy InfoTech
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold text-black rounded-b-lg rounded-s-lg">
                    Junior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3  text-black font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic  text-black">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;