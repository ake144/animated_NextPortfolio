import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";

const post = ()=>{
  const fileDir = 'content/post'

 const posts = fs.readdirSync(path.join(fileDir));

 const allPostsData = posts.map((postName) => {
    const postPath = path.join(fileDir, postName);
    const fileContents = fs.readFileSync(postPath, "utf8");
    const { data } = matter(fileContents);
    return {
        slug: postName.replace(".mdx", ""),
        meta: data,
    };
});

return(<>
      <h1 className="text-xl items-center justify-center"> my first Blog </h1>

  

        {allPostsData.map((post) => (
            <div className="flex flex-col gap-4">
                <Link href={`/post/${post.slug}`} key={post.slug}>
                <h1 className="text-xl">{post.meta.title}</h1>
                <p className="text-sm">{post.meta.date}</p>
                <p className="text-sm">{post.meta.description}</p>
                <p className="text-sm">{post.meta.tags}</p>
                <p className="text-sm">{post.meta.category}</p>
                <p className="text-sm">{post.meta.author}</p>
                <p className="text-sm">{post.meta.slug}</p>
                </Link>
                </div>))
        }



</>)
}
export default post;