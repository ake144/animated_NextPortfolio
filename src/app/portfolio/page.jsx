"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Crypto",
    desc: "latest cryto market updates, get whole info about the crypto price, market cap and 24 changes within prices of crypto. You can also get description about individual crypto coins.",
    img:'/crypto.jpg',
    link: "https://crypto-info-xz8k.vercel.app/",

  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Newsletter and  Blog site",
    desc: "Blog and Newsletter StartApp crafted with Next.js + Shadcn + HyperUI + Prisma + Supabase. 🌟 Dive into a world of captivating content creation and sharing!",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://next-article.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Personal Portfolio App",
    desc: "personal portfolio built with typescript and prisma ORM.",
    img: "/portfolio.jpg",
    link: "https://akeja-aklilus-projects.vercel.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "url shortener",
    desc: "A URL shortener web application built with Next.js, Redis Upstash for database storage, and Shadcn for UI components.", 
    img: "/url shortener.png",
    link: "https://gtly.vercel.app/",
  },
];


const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center  text-black">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center flex-wrap overflow-hidden">
          <motion.div style={{ x }} className="flex">
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[200px] xl:w-[400px] xl:h-[220px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-16 bg-white   justify-center text-center ">
        <h1 className="text-6xl  text-whu ">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className=" w-screen  h-screen"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="items-center justify-center h-auto font-sm"
              >
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;