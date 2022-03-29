import type { NextApiRequest, NextApiResponse } from "next";
import { getGeneralUser, getMoreUserData } from "../search";

type Data = {
  name: string;
};

export default async function searchUserByName(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({ name: "John Doe" });
  //   return res.status(200).json(dataUsers);
}
