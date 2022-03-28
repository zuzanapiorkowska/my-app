import { useState } from "react";
import { Header } from "../components/Header/Header";
import { UserProfile } from "../components/Profiles/UserProfile";
import { IUserPresentation } from "../interfaces/GitHubData";

function UserPage() {
  const [dataToDisplay, setDataToDisplay] = useState<IUserPresentation>({
    name: "Zuza Napiórkowska",
    userName: "string;",
    avatarUrl: "dd",
    followers: 0,
    following: 332,
    stars: 373,
  });

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
