'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import Image from 'next/image';

const BlogDetails = ({ id }) => {
  const [post, setPost] = useState(null); 
  const api = `/api/blog/${id}`; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();

        if (response.ok) {
          setPost(data);
          console.log(data);
        } else {
          console.error(`Failed to fetch blog post with ID ${id}`);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchData();
  }, [id, api]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {post ? (
        <>
          <Image
            src={post.image} // Assuming 'image' is a property in your API response
            alt={post.title} // Assuming 'title' is a property in your API response
            width={800}
            height={500}
          />
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
};

export default BlogDetails;
