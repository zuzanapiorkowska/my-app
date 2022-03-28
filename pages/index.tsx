// Our app should allow to search Github for users and repositories.

// - Main screen of the app should contain search field and list of search results
// - By default the list should be filled with results without any query specified
// - When typing into search field, the list should automatically reload with Github users and repositories
// - Search results should contain both users and repositories - they can interlace with each other
// - Search results should be sorted ascending by result object id’s
// - Results pagination does **not** have to be implemented
// - When you press on a user, new screen should be presented. Display username, avatar and number of followers for selected user.
// - When you press on a repository nothing should happen

import { SearchInput } from "../components/SearchInput"
import { SearchResult} from "../components/SearchResult"
import axios from "axios";
import { Repository } from "../interfaces/GitHubData";
import { useState } from "react";


function HomePage() {
    const [dataToDisplay, setDataToDisplay] = useState<Array<Repository>>([{
        name: "Repo1",
        description: "umi Reacta troszku",
        observers: 0,
        colorOfMainLanguage: "blue",
        mainLanguage: "typescript",        
        lastUpdate: "dzisiej"
    },
    {
        name: "Repo2",
        description: "umi Reacta troszku",
        observers: 0,
        colorOfMainLanguage: "blue",
        mainLanguage: "typescript",        
        lastUpdate: "dzisiej"
    }
    ]);

    async function getGitHubUserData(query:string): Promise<Array<Repository>>{
        const response = await axios.get(`https://www.github.com/${query}`);
        const githubData: Array<Repository> = response.data;
        return githubData;
    }

    async function handleChange(e: string):Promise<void> {
        const data = await getGitHubUserData(e) as Array<Repository>;
        setDataToDisplay(data);
    }
    
    return <>
    <SearchInput onChange={(e)=>handleChange(e)}/>
    {dataToDisplay.map((result, idx) => <SearchResult 
    name={dataToDisplay[idx].name}
    description={dataToDisplay[idx].description} 
    observers={dataToDisplay[idx].observers}
    colorOfMainLanguage={dataToDisplay[idx].colorOfMainLanguage}
    mainLanguage={dataToDisplay[idx].mainLanguage}
    lastUpdate={dataToDisplay[idx].lastUpdate} />
    )}
    </>
}

export default HomePage;