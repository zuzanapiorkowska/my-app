// Our app should allow to search Github for users and repositories.

// - Main screen of the app should contain search field and list of search results
// - By default the list should be filled with results without any query specified
// - When typing into search field, the list should automatically reload with Github users and repositories
// - Search results should contain both users and repositories - they can interlace with each other
// - Search results should be sorted ascending by result object id’s
// - Results pagination does **not** have to be implemented
// - When you press on a user, new screen should be presented. Display username, avatar and number of followers for selected user.
// - When you press on a repository nothing should happen

import { SearchInput } from "../components/SearchInput";
import { Repository } from "../components/Repository";
import axios from "axios";
import { useState } from "react";
import { IRepository, IUser } from "../interfaces/GitHubData";
import { User } from "../components/User";
import { Header } from "../components/Header";

function HomePage() {
  const [dataToDisplay, setDataToDisplay] = useState<
    Array<IRepository | IUser>
  >([
    {
      name: "Repo1",
      description: "umi Reacta troszku",
      observers: 0,
      colorOfMainLanguage: "blue",
      mainLanguage: "typescript",
      lastUpdate: "dzisiej",
    },
    {
      name: "Repo2",
      description: "umi Reacta troszku",
      observers: 0,
      colorOfMainLanguage: "blue",
      mainLanguage: "typescript",
      lastUpdate: "dzisiej",
    },
    {
      name: "Repo2",
      description: "umi Reacta troszku",
      avatarUrl:
        "data:image/png;base64,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",
      place: "warsaw",
    },
  ]);

  async function getGitHubUserData(
    query: string
  ): Promise<Array<IRepository | IUser>> {
    const response = await axios.get(`https://www.github.com/${query}`);
    const githubData: Array<IRepository | IUser> = response.data;
    return githubData;
  }

  async function handleChange(e: string): Promise<void> {
    const data = (await getGitHubUserData(e)) as Array<IRepository>;
    setDataToDisplay(data);
  }

  return (
    <>
      <Header onChange={(e) => handleChange(e)} />
      {dataToDisplay.map((result) => {
        if ("observers" in result) {
          return <Repository
            name={result.name}
            description={result.description}
            observers={result.observers}
            colorOfMainLanguage={result.colorOfMainLanguage}
            mainLanguage={result.mainLanguage}
            lastUpdate={result.lastUpdate}
          />;
        } else {
          return <User
            name={result.name}
            avatarUrl={result.avatarUrl}
            description={result.description}
            place={result.place}
          />;
        }
      })}
    </>
  );
}

export default HomePage;
