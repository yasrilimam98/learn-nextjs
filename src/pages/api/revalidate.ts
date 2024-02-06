// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).send({ revalidated: false, message: "Invalid token" });
  }

  if (req.query.data === "products") {
    try {
      await res.revalidate("products/static");
      return res.json({ revalidated: true });
    } catch (error) {
      return res.status(500).send({ revalidated: false });
    }
  }

  return res.status(400).send({ revalidated: false, message: "Invalid data" });
}
