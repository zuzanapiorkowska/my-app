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
import { GitHubData } from "../interfaces/GitHubData";
import { useState } from "react";
import { SearchResults } from "../interfaces/SearchResults";


function HomePage() {
    const [dataToDisplay, setDataToDisplay] = useState([{
        name: "",
        description: "",
        observers: 0,
        mainLanguage: "",        
        colorOfMainLanguagE: "",
        lastUpdate: ""
    }
    ]);

    async function getGitHubUserData(query:string): Promise<Array<GitHubData>>{
        const response = await axios.get(`https://www.github.com/${query}`);
        const githubData: Array<GitHubData> = response.data;
        return githubData;
    }

    async function handleChange(e: string):Promise<void> {
        const data = await getGitHubUserData(e);
        setDataToDisplay(data);
    }
    
    return <>
    <SearchInput onChange={(e)=>handleChange(e)}/>
    dataToDisplay.forEach((result), () =>
    return <SearchResult 
    name={dataToDisplay.name}
    description={dataToDisplay.description} 
    observers={dataToDisplay.observers}
    colorOfMainLanguagE={dataToDisplay.colorOfMainLanguagE}
    mainLanguage={dataToDisplay.colorOfMainLanguage}
    lastUpdate={dataToDisplay.lastUpdate} />
    </>
}

export default HomePage;