import type { NextApiRequest, NextApiResponse } from "next";
import { useAmp } from "next/amp";
import { useState } from "react";
import { IRepository, IUser } from "../../interfaces/ResultInterFace";
import { RepositoryType1 } from "../../src/types/RepositoryType1";
import { SpecificUserType } from "../../src/types/SpecificUserType";
import { UserType } from "../../src/types/UserType";

const axios = require("axios").default;

let token = process.env.MY_TOKEN;

export const getProperRepos = async (req: NextApiRequest) => {
  const repositories = await axios.get(
    `https://api.github.com/search/repositories?q=${req.query.search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
  );
  const dataRepos = (await repositories.data.items) as RepositoryType1[];
  const properRepos = dataRepos.map((dataRepo) => {
    return {
      name: dataRepo.name,
      description: dataRepo.description,
      mainLanguage: dataRepo.language,
      lastUpdate: dataRepo.updated_at,
      stars: dataRepo.stargazers_count,
    } as IRepository;
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

export const mapUserDataToMatchFrontInterface = async (
  usersArr: SpecificUserType[]
) => {
  return usersArr.map((user) => {
    return {
      name: user.name,
      userName: user.login,
      avatarUrl: user.avatar_url,
      description: user.bio,
      place: user.location,
    } as IUser;
  });
};

const getData = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const repositories = await getProperRepos(req);
  const generalUserData = await getGeneralUser(req);
  const allUserData = await getMoreUserData(generalUserData);
  const users = await mapUserDataToMatchFrontInterface(allUserData);

  res.status(200).json([...repositories, ...users]);
};
export default getData;
