import type { NextApiRequest, NextApiResponse } from "next";
import { getGeneralUser, getMoreUserData } from "../search";

export default async function searchUserByName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchString = req.query.login;
  const limDataUsers = await getGeneralUser(req);
  const dataUsers = await getMoreUserData(limDataUsers);

  return res.status(200).json(dataUsers);
  //   return res.status(200).json(dataUsers);
}
