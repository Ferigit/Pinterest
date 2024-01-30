import React, { useState } from "react";
import { Button } from "@/src/components/common";
import { usePostStore } from "@/src/store/usePostStore";
import { ApiInstance } from "@/src/utils/api";
import { Tags } from "./Tags";

interface ImageComponentProps {
  id?: string;
  src: string;
  alt: string;
  title: string;
  buttons?: React.ReactNode;
  imgStyle?: any;
  tags: (string | undefined)[];
  description: string;
}

const Post: React.FC<ImageComponentProps> = ({
  id,
  src,
  title = "",
  description,
  tags,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { deletePost } = usePostStore();

  const handleDeletePost = async () => {
    try {
      const res = await ApiInstance("DELETE", "/api/posts/delete", { id: id });
      if (res.data.success) {
        deletePost(id);
      }
    } catch (error) {}
  };
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group cursor-pointer w-full h-auto`}
    >
      <img src={src} className="w-full h-auto" />
      {isHovered && (
        <Button
          className="top-4 left-4 absolute w-fit text-xs md:text-base md:w-24 z-10 bg-red-100 text-white hover:text-white hover:bg-red-100 "
          onClick={handleDeletePost}
        >
           Delete
        </Button>
      )}
      <Tags tags={tags} />
      <div className="p-1">
        {title && (
          <h2 className=" truncate text-ellipsis w-[180px] text-dark text-lg font-medium flex justify-start items-center gap-x-2">
            <span className="bg-gray w-6 h-6 rounded-full inline-block"></span>
            {title}
          </h2>
        )}
        {description && <h3 className="my-1 truncate text-ellipsis w-[220px]">{description}</h3>}
      </div>
    </article>
  );
};

export default Post;
