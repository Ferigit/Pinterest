import type { NextApiRequest, NextApiResponse } from "next";

interface IBody {
  username: string;
  password: string;
}
const someAsyncOperation = ({ username, password }: IBody) => {
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve({ token: username, username });
    } else {
      reject({ err: "no-valid-creds" });
    }
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  try {
    const result = await someAsyncOperation({ username, password });

    res.status(200).json({ data: result, success: true });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
