import React from "react";
import { IPost } from "@/src/types/post";
import { DeleteIcon } from "@/src/Icons/post";

interface IProps {
  post: IPost;
  handleDeleteDraftPost: any;
}
const DraftPost = ({ post, handleDeleteDraftPost }: IProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 mt-4">
      <div
        key={post.image.name}
        className="flex justify-start items-center gap-x-2"
      >
        <img
          src={URL.createObjectURL(post.image)}
          alt="Attached Image"
          className=" w-16 h-16 object-cover rounded-md"
        />
        <span className="">{post.image.name ?? "-"}</span>
        <DeleteIcon onClick={() => handleDeleteDraftPost(post?.id)} />
      </div>
    </div>
  );
};

export default DraftPost;
