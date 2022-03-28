import type { NextApiRequest, NextApiResponse } from "next";
import { useAmp } from "next/amp";
import { Repository, User } from "../../interfaces/ResultInterFace";
import { RepositoryType1 } from "../../src/types/RepositoryType1";
import { SpecificUserType } from "../../src/types/SpecificUserType";
import { UserType } from "../../src/types/UserType";
import { UserTypeAll } from "../../src/types/UserTypeAll";
const axios = require("axios").default;

let token = process.env.MY_TOKEN;

export const getProperRepos = async (req: NextApiRequest) => {
  const repositories = await axios.get(
    `https://api.github.com/search/repositories?q=${req.query.search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataRepos = (await repositories.data.items) as RepositoryType1[];
  const properRepos = dataRepos.map((dataRepo) => {
    return {
      name: dataRepo.name,
      description: dataRepo.description,
      mainLanguage: dataRepo.language,
      observers: dataRepo.stargazers_count,
      lastUpdate: dataRepo.updated_at,
    } as Repository;
  });
  return properRepos;
};

export const getGeneralUser = async (req: NextApiRequest) => {
  const users = await axios.get(
    `https://api.github.com/search/users?q=${req.query.search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataUsers = (await users.data.items) as UserType[];
  return dataUsers;
};

export const getMoreUserData = async (usersArr: UserType[]) => {
  let newArr = [];

  for (const user of usersArr) {
    const accurateUserData = await axios.get(
      `https://api.github.com/users/${user.login}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let accurateRespData = (await accurateUserData.data) as SpecificUserType;
    newArr.push(accurateRespData);
  }

  return newArr;
};

const getData = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const repositories = await getProperRepos(req);
  const generalUserData = await getGeneralUser(req);
  const allUserData = await getMoreUserData(generalUserData);

  res.status(200).json(allUserData);
};
export default getData;
