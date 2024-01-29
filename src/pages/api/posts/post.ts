import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, image, publishDate, tags } = req.body; //Date.now()
  const newPost = {
    id: uuidv4(),
    title,
    description,
    image,
    publishDate: publishDate ? publishDate : "",
    tags: tags ? tags : [],
  };

  try {
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};
