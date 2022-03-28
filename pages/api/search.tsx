import { RepositoryType } from "../../src/types/RepositoryType";
import { UserType } from "../../src/types/UserType";
import type { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios").default;

const getRepos = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const repositories = await axios.get("https://api.github.com/repositories");
  const dataRepo = repositories.data as RepositoryType[];
  const users = await axios.get("https://api.github.com/users");
  const dataUser = users.data as UserType[];
  const response = [...dataUser, ...dataRepo];
  res.status(200).json(response);
};
export default getRepos;
