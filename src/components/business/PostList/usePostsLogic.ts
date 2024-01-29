import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePostStore } from "@/src/store/usePostStore";
import { IPost } from "@/src/types/post";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { getDimensionsFromBase64 } from "@/src/utils/base64";
import { sortByPublishDate } from "@/src/utils/date";

export const usePostsLogic = () => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const [imageDimensions, setImageDimensions] = useState<
    { width: number; height: number }[]
  >([]);

  const { posts } = usePostStore();
  const router = useRouter();
  const windowSize = useWindowSize();

  useEffect(() => {
    const dimensionsPromises = posts.map((post) =>
      getDimensionsFromBase64(post.image)
    );
    Promise.all(dimensionsPromises).then((dimensions) => {
      setImageDimensions(dimensions);
    });
  }, [posts, windowSize]);

  const filterQuery = router?.query?.filter ?? "";

  useEffect(() => {
    const sortedPosts: IPost[] = sortByPublishDate(posts);
    setFilteredPosts(
      sortedPosts?.filter((post: IPost) =>
        typeof filterQuery === "string"
          ? post.title.toLowerCase().includes(filterQuery?.toLowerCase())
          : false
      )
    );
  }, [posts, filterQuery]);

  return {
    imageDimensions,
    filteredPosts,
    filterQuery,
    getDimensionsFromBase64,
    posts,
  };
};
