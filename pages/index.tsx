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
import { ResultList} from "../components/ResultList"


function HomePage() {

    function handleChange():void {
        console.log("change");
    }

    
    return <>
    <SearchInput/>
    <ResultList onChange={()=>handleChange()} />
    </>
}

export default HomePage;