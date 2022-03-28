import { UserType } from "../../src/types/UserType";
import type { NextApiRequest, NextApiResponse } from "next";
import { Repository, User } from "../../interfaces/ResultInterFace";
import { RepositoryType } from "../../src/types/RepositoryType";
const axios = require("axios").default;

let token = process.env.MY_TOKEN;

// async function getSearchUser(req: NextApiRequest) {
//   const res = await fetch(
//     `https://api.github.com/search/users?q=${req.query.search}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data.items;
// }

const getRepos = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const repositories = await axios.get(
    `https://api.github.com/search/repositories?q=${req.query.search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataRepos = (await repositories.data.items) as RepositoryType[];
  const properRepos = dataRepos.map((dataRepo) => {
    return {
      name: dataRepo.name,
      description: dataRepo.description,
      mainLanguage: dataRepo.language,
      observers: dataRepo.watchers_count,
      lastUpdate: dataRepo.updated_at,
    } as Repository;
  });

  // const users = await axios.get("https://api.github.com/search/users", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const dataUsers = (await users.data) as UserType[];
  // const properUsers = dataUsers.map((dataUser) => {
  //   return {
  //     name: dataUser.login,
  //     avatarUrl: dataUser.avatar_url,
  //     description: dataUser.events_url,
  //     place: dataUser.node_id,
  //   } as User;
  // });
  // const response = [...dataRepos];
  res.status(200).json(properRepos);
};
export default getRepos;
