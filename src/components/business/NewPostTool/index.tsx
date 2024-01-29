import React, { useState } from "react";
import NewPostForm from "../NewPostForm";
import { Button } from "@/src/components/common/Button";
import clsx from "classnames";
import { useDraftPostTool } from "@/src/store/useDraftPostTool";

import { IPost } from "@/src/types/post";
import DraftPost from "./DraftPost";

const NewPostTool = () => {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);
  const { deleteDraftPost, attachedImage, draftPosts } = useDraftPostTool();

  const toggleAside = () => {
    setIsAsideCollapsed(!isAsideCollapsed);
  };

  const handleDeleteDraftPost = (postId: number | undefined) =>
    deleteDraftPost(postId ? postId : 0);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`border-b-2 md:border-t-0 border-r-2 border-r-gray px-1 md:px-4 md:block relative ${
          isAsideCollapsed ? "md:w-16" : "w-full md:w-1/5 "
        }`}
      >
        <div
          className={clsx(
            "flex md:flex-row  gap-y-1 md:gap-y-0 justify-between items-center ",
            !isAsideCollapsed ? "md:p-4 p-1" : "md:py-4 py-1"
          )}
        >
          {!isAsideCollapsed && (
            <p className="text-sm md:text-base">Draft ({draftPosts.length})</p>
          )}

          <Button className=" top-0 right-0" onClick={toggleAside}>
            {isAsideCollapsed ? "≫" : "≪"}
          </Button>
        </div>
        <Button
          onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
          className="md:hidden mt-2 w-full h-12 rounded-full text-xs md:text-base "
        >
          {!isAsideCollapsed ? <span>Create new</span> : <span>+</span>}
        </Button>
        <Button className="hidden md:block mt-2 w-full h-12 rounded-full text-xs md:text-base ">
          {!isAsideCollapsed ? <span>Create new</span> : <span>+</span>}
        </Button>

        <div
          className={clsx(
            "w-full flex flex-col gap-y-2 mt-4",
            isAsideCollapsed && "hidden"
          )}
        >
          {draftPosts.map((dPost: IPost) => (
            <DraftPost
              key={dPost.image.name}
              post={dPost}
              handleDeleteDraftPost={handleDeleteDraftPost}
            />
          ))}
        </div>
      </aside>
      <div
        className={clsx(
          "px-1 md:px-4 md:flex-1",
          !isAsideCollapsed && "hidden md:block"
        )}
      >
        <NewPostForm />
      </div>
    </div>
  );
};

export default NewPostTool;
