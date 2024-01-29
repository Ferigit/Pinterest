import { NextApiRequest, NextApiResponse } from "next";
import { usePostStore } from "@/src/store/usePostStore";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { posts } = usePostStore.getState();

  try {
    res.status(200).json({ data: posts, success: true });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};
