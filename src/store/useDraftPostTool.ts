import { create } from "zustand";
import { IPost } from "@/src/types/post";

interface PostStore {
  draftPosts: IPost[];
  setDraftPosts: (posts: IPost[]) => void;
  addDraftPost: (post: IPost) => void;
  deleteDraftPost: (postId: number) => void;
}

export const useDraftPostTool = create<PostStore>()((set, get) => ({
  draftPosts: [],
  setDraftPosts: (posts: IPost[]) => {
    set((state) => ({ draftPosts: posts }));
  },
  deleteDraftPost: (postId: number) => {
    set((state) => ({
      draftPosts: state.draftPosts.filter(
        (dPost: IPost) => dPost.id !== postId
      ),
    }));
  },
  addDraftPost: (post) => {
    set((state) => ({ draftPosts: [...state.draftPosts, post] }));
  },
}));
