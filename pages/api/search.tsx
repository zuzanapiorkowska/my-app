import { RepositoryType } from "../../src/types/RepositoryType";
import { UserType } from "../../src/types/UserType";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../interfaces/ResultInterFace";
const axios = require("axios").default;

let token = process.env.MY_TOKEN;

const getRepos = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const repositories = await axios.get("https://api.github.com/repositories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const dataRepo = (await repositories.data) as RepositoryType[];
  const users = await axios.get("https://api.github.com/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const dataUsers = (await users.data) as UserType[];
  const properUsers = dataUsers.map((dataUser) => {
    return {
      name: dataUser.login,
      avatarUrl: dataUser.avatar_url,
      description: dataUser.events_url,
      place: dataUser.node_id,
    } as User;
  });
  const response = [...properUsers, ...dataRepo];
  res.status(200).json(response);
};
export default getRepos;
