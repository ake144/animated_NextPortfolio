import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";


const post = ()=>{
 
  const blogDir = "./src/app/content";
  const posts = fs.readdirSync(blogDir);
  console.log(posts);

 const allPostsData = posts.map((postName) => {
    const postPath = path.join(blogDir, postName);
    const fileContents = fs.readFileSync(postPath, "utf8");
    const { data } = matter(fileContents);
    return {
        slug: postName.replace(".mdx", ""),
        meta: data,
    };
});

return(<>
<div className="min-h-full">
      <h1 className="text-3xl text-black justify-center items-center "> my first Blog </h1>

      {allPostsData.map((post) => (
  <div key={post.slug} className="flex gap-4 items-center  justify-center mb-4">
    <Link href={`/post/${post.slug}`}>
      <div className="w-full max-w-md p-4 border border-gray-300 rounded-md">
        <h1 className="text-xl text-black font-bold mb-2">{post.meta.title}</h1>
        <p className="text-sm text-gray-600 mb-2">{post.meta.date}</p>
        <p className="text-sm text-gray-600 mb-2">{post.meta.description}</p>
        <p className="text-sm text-gray-600">{post.meta.tags}</p>
      </div>
    </Link>
  </div>
 
))}
 </div>

</>)
}
export default post;