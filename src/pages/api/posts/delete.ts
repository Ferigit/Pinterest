import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "failed to load data" });
    }
  } else {
    res.status(405).json({ message: "Only DELETE requests are allowed" });
  }
}
