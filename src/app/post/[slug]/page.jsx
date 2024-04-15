import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('./src/app/content'));
  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
  return paths;
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join('./src/app/content', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }) {
  const { frontMatter } = getPost(params);
  const title = frontMatter.title;

  const description = frontMatter.description;

  return {
    title,
    description,
    openGraph: {
      images: '/c++.jpg',
    },
  };
}

export default function Page({ params }) {
  const { frontMatter, content } = getPost(params);
  return (
    <div className='min-h-screen from-gray-600 to-slate-800 bg-gradient-to-r'>
      <article className='prose min-h-full prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
        <h1 className='text-white pt-12'>{frontMatter.title}</h1>
        <img src='/c++.jpg' height={140} width={580} alt="C++ Image" />
        <h2 className='text-white'>{frontMatter.description}</h2>
        <p className='justify-left text-white'>{frontMatter.date}</p>
        <MDXRemote className='min-h-full' source={content}></MDXRemote>
      </article>
    </div>
  );
}
