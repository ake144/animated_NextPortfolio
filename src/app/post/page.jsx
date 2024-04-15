import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";


export async function Metadata() {

  const title = 'personal Blog  articles  ';
  const ogImageUrl = '/blog.jpg'; // Corrected image path
  const description ="this is my personal blog site, anything updates are released here";
  return {
    title,
    description,
    ogImageUrl
  };
}


const post = () => {
  const blogDir = "./src/app/content";
  const posts = fs.readdirSync(blogDir);
  const allPostsData = posts.map((postName) => {
    const postPath = path.join(blogDir, postName);
    const fileContents = fs.readFileSync(postPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: postName.replace(".mdx", ""),
      meta: data,
    };
  });
  const images = [
    'c++.jpg',
    'blog.jpg',
     'blog.jpg'
  ]



  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                My Blogs
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                My Recent News
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap m-auto">
          {allPostsData.map((post,index) => (
            <div key={post.slug} className="w-full md:w-1/2 lg:w-1/3 px-4  justify-center  gap-3  ">
              <div className="max-w-[370px] mx-auto justify-center items-center mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                     src={`/${images[index]}`} 
                    alt="image"
                    className="w-full"
                  />
                
                </div>
                <div>
                  <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-black mb-5">
                    {post.meta.date}
                  </span>
                  <h3>
                    <Link href={`/post/${post.slug}`}>
                      <p className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                        {post.meta.title}
                      </p>
                    </Link>
                  </h3>
                  <p className="text-base text-body-color">
                    {post.meta.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default post;
