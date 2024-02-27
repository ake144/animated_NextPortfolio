'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch posts from your API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog'); // Update the path based on your API route
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
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
            className={` p-2 flex flex-col w-full h-full  bg-gradient-to-r ${item.color}`}
            key={item.id}
          >
            <div className="flex flex-col gap-3 text-white">
              <h1 className="text-xl  font-bold md:text-2xl lg:text-2xl xl:text-3xl text-black">
                {item.title}
              </h1>
              <div className="relative w-30 h-26 md:w-66 md:h464 lg:w-[200px] lg:h-90px] xl:w-[200px] xl:h-[120px]">
                <Image src={item.img} alt="png " fill />
              </div>
              <p className="w-50 md:w-76 lg:w-[200px] lg:text-md xl:w-[300px] text-black">
                {item.desc}
              </p>
              <Link href={item.link} passHref>
                <button className="p-5 text-sm md:p-4 md:text-md lg:p-4 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded">
                  See Demo
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
