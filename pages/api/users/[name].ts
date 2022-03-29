import { NextApiRequest, NextApiResponse } from "next";
import { SpecificUserType } from "../../../src/types/SpecificUserType";
import { IRepository, IUser } from "../../../interfaces/ResultInterFace";
import { IUserPresentation } from "../../../interfaces/GitHubData";

const axios = require("axios").default;

let token = process.env.MY_TOKEN;

export const mapUserDataToMatchFrontInterface = async (
  user: SpecificUserType
) => {
  return {
    name: user.name,
    userName: user.login,
    avatarUrl: user.avatar_url,
    followers: user.followers,
    following: user.following,
    // stars: user.sr
    place: user.location,
  } as IUserPresentation;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;
  const userData = await axios.get(`https://api.github.com/users/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const accurateRespData = (await userData.data) as SpecificUserType;
  const properData = await mapUserDataToMatchFrontInterface(accurateRespData);
  return res.status(200).json(properData);
};

export default handler;
