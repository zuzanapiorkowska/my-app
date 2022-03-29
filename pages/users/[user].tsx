import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserProfile } from "../../components/Profiles/UserProfile";
import { IUserPresentation } from "../../interfaces/GitHubData";
import { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function UserPage() {
  const router = useRouter();
  const user = router.query.user as unknown as string;
  async function getGitHubUserData(): Promise<IUserPresentation> {
    const response = await axios.get(
      `http://localhost:3000/api/search?search=${user}`
    );
    console.log(response);
    const githubData: IUserPresentation = response.data;
    const data: IUserPresentation = {
      name: githubData.name,
      userName: githubData.userName,
      avatarUrl: githubData.avatarUrl,
      followers: githubData.followers,
      following: githubData.following,
      stars: githubData.stars,
    };
    return data;
  }

  // const dataToDisplay = getGitHubUserData();

  const dataToDisplay = {
    name: user,
    userName: user,
    avatarUrl: "/zmalinkiem.jpg",
    followers: 0,
    following: 332,
    stars: 373,
  };

  return (
    <>
      <Header onChange={(e) => {}} />
      <UserProfile
        name={dataToDisplay.name}
        userName={dataToDisplay.userName}
        avatarUrl={dataToDisplay.avatarUrl}
        followers={dataToDisplay.followers}
        following={dataToDisplay.following}
        stars={dataToDisplay.stars}
      />
    </>
  );
}

export default UserPage;
