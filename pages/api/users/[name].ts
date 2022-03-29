import { NextApiRequest, NextApiResponse } from "next";
import { SpecificUserType } from "../../../src/types/SpecificUserType";
import { IRepository, IUser } from "../../../interfaces/ResultInterFace";

const axios = require("axios").default;

let token = process.env.MY_TOKEN;

export const mapUserDataToMatchFrontInterface = async (
  user: SpecificUserType
) => {
  return {
    name: user.login,
    avatarUrl: user.avatar_url,
    description: user.bio,
    place: user.location,
  } as IUser;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query;
  const userData = await axios.get(`https://api.github.com/users/${pid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let accurateRespData = (await userData.data) as SpecificUserType;
  return mapUserDataToMatchFrontInterface(accurateRespData);
};

export default handler;
