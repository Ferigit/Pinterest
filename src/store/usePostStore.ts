import { create } from "zustand";

import { IPost } from "@/src/types/post";
import { persist, createJSONStorage } from "zustand/middleware";

interface PostStore {
  posts: IPost[];
  addPost: (post: IPost) => void;
  deletePost: (postId: string | undefined) => any;
  setPosts: (posts: IPost[]) => void;
  newPost: IPost | null;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set, get) => ({
      posts: [],
      newPost: null,
      setNewPost: (newPost: IPost) => {
        set((state) => ({ newPost }));
      },
      addPost: (post) => {
        set((state) => ({ posts: [...state.posts, post] }));
      },
      setPosts: (posts: IPost[]) => {
        set(() => ({ posts: posts }));
      },
      deletePost: (postId) => {
        set((state) => {
          return {
            posts: state.posts.filter((dPost: IPost) => dPost.id !== postId),
          };
        });
      },
    }),
    {
      name: "posts-storage", // name of item in the storage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
