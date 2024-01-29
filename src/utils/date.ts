import { IPost } from "@/src/types/post";

export function sortByPublishDate(array: IPost[]): IPost[] {
  if (!Array.isArray(array)) return [];
  return [...array].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
