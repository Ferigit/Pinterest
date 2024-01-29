import { IPost } from "@/src/types/post";
import Post from "@/src/components/business/Post";
import clsx from "classnames";
import Link from "next/link";
import { usePostsLogic } from "./usePostsLogic";


export default function Posts() {
  const { filteredPosts, imageDimensions, posts } = usePostsLogic();

  if (filteredPosts.length === 0) {
    return (
      <div className="flex flex-col h-screen justify-center items-center p-4 w-full mt-auto">
        <h3>Can’t find any saved posts.</h3>
        <Link
          href={"/create-post-tool"}
          className={clsx(
            "bg-blue text-white mt-4 px-3 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full",
            !posts.length
          )}
        >
          Create and save your first post!
        </Link>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {filteredPosts.map((post: IPost, index: number) => {
        const { height = 0 } = imageDimensions[index] || {
          height: 0,
        };
        return (
          <div
            key={index}
            className="relative "
            style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}
          >
            <Post
              id={post.id}
              key={post.image}
              title={post.title}
              description={post.description}
              alt=""
              src={post.image}
              tags={post.tags}
            />
          </div>
        );
      })}
    </div>
  );
}
