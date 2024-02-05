// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
  // data: {
  //   id: number;
  //   name: string;
  //   price: number;
  //   size: string;
  // }[]; // Array of products
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.products![1]) {
    const data = await retrieveDataById("products", req.query.products![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  }

  const data = await retrieveData("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}
