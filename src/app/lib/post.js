// src/app/lib/posts.js
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export async function getAllPostSlugs() {
  const files = await fs.promises.readdir('content');
  console.log(files);

  return files.map((file) => ({
    params: {
      slug: file.replace('.mdx', ''),
    },
  }));
}

export async function getPostData(slug) {
  const postContent = await fs.promises.readFile(
    path.join('content/post', `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = matter(postContent);

  return {
    meta: data,
    content,
  };
}
