import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserProfile } from "../../components/Profiles/UserProfile";
import { IUserPresentation } from "../../interfaces/GitHubData";
import { useRouter } from "next/router";
import axios from "axios";

 function UserPage() {
  
  const router = useRouter();
  const user = router.query.user as unknown as (string | undefined);
   const [dataToDisplay, setDataToDisplay] = useState<IUserPresentation> ({
    name: "",
    userName: "",
    avatarUrl: "",
    followers: 0,
    following: 0,
  });
  const getGitHubUserData = async () => {
    if(!user) return;
    //jeśli jest undefined, to nie chcemy renderować
    const response = await axios.get(`http://localhost:3000/api/users/${user}`);
    console.log(response);
    const githubData = (await response.data) as IUserPresentation;
    setDataToDisplay({
      name: githubData.name,
      userName: githubData.userName,
      avatarUrl: githubData.avatarUrl,
      followers: githubData.followers,
      following:githubData.following
    });
  };
//bez użycie useEffect będzie się renderować za każdym razem jak się zmieni stan, ale jak się zmieni stan, to wywoła znowu funkcję i ona zmieni stan i błędne koło
//żeby tak się nie robiło to useEffect i dwa parametry jeden to eefect, a drugi to dependencies i za każdym razem kiedy się mienia dependencies, to się odpala effect, a dependencies polega na state.
//
useEffect(()=> {getGitHubUserData()}, [user])
//useEffect reaguje na zmianę usera i wtedy wywołuje tę funkcję dopiero.
//na poczatku user jest undefined i jak się załaduje, to znowu się wyrenderuje wszystko


  // const dataToDisplay = {
  //   name: user,
  //   userName: user,
  //   avatarUrl: "/zmalinkiem.jpg",
  //   followers: 0,
  //   following: 332,

  // };

  return (
    <>
      <Header onChange={(e) => {}} />
      <UserProfile
        name={dataToDisplay.name}
        userName={dataToDisplay.userName}
        avatarUrl={dataToDisplay.avatarUrl}
        followers={dataToDisplay.followers}
        following={dataToDisplay.following}
      />
    </>
  );
}

export default UserPage;
