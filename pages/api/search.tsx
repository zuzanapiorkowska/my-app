import { RepositoryType } from "../../src/types/RepositoryType";
import type { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios").default;

const getRepos = async (
  req: NextApiRequest,
  res: NextApiResponse<RepositoryType>
) => {
  const repositories = await axios.get("https://api.github.com/repositories");
  const data = repositories.data;
  res.status(200).json();
};

export default getRepos;
