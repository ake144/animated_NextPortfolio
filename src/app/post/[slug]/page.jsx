import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams(){

    const files =fs.readdirSync(path.join('./src/app/content'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({slug}){

    const markdownFile = fs.readFileSync(path.join('./src/app/content', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}


export default function Page({ params }){
    const props = getPost( params);
    return (
 
      <div className='min-h-screen'>
        <article className='prose min-h-full prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h1 className='text-black'>{props.fontMatter.title}</h1>
            <h2 className='text-black'> {props.fontMatter.description}</h2>
            <p className='justify-left '>{props.fontMatter.date}</p>

            <MDXRemote className='min-h-full' source={props.content} ></MDXRemote>
        </article>
        </div>
    )
}