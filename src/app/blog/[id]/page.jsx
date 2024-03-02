'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

async function getPost(id) {
  const response = await fetch(`/api/blog/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blog post with ID ${id}`);
  }
  return response.json();
}

const BlogDetails = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPost(id);
        setPost(postData);
      } catch (error) {
      //   console.error('Error fetching blog post:', error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {post ? (
        <>
          <div className='flex flex-col justify-center items-center gap-8 w-1/2 flex-auto '>
            <h2>{post.title}</h2>
            <Image
              src={post?.img}
              alt={post?.title}
              height={100}
              width={100}
            />
            <p className='p-2 justify-center font-sans text-sm'>{post.desc}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
};

export default BlogDetails;
