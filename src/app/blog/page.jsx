'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';

async function getAllPortfolios() {
  const response = await fetch('/api/blog', 
  { cache: 'force-cache' });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPortfolios();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='flex row-span gap-8 w-1/2 flex-auto '>
        {posts?.map((item) => (
          <div
            className={` p-2 flex flex-col w-full h-full  bg-gradient-to-r ${item?.color}`}
            key={item.id}
          >
            <div className="flex flex-col gap-3 text-white">
              <h1 className="text-xl  font-bold md:text-2xl lg:text-2xl xl:text-3xl text-black">
                {item?.title}
              </h1>
              <div className="relative w-30 h-26 md:w-66 md:h464 lg:w-[200px] lg:h-90px] xl:w-[200px] xl:h-[120px]">
                <Image src={item?.img} alt="png " height={200}  width={100}/>
              </div>
              <p className="w-50 md:w-76 lg:w-[200px] lg:text-md xl:w-[300px] text-black">
                {item?.desc}
              </p>
              <Link href={item?.link} passHref>
                <button className="p-5 text-sm md:p-4 md:text-md lg:p-4 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
