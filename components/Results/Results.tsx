import { IRepository, IUser } from "../../interfaces/GitHubData";
import { Repository } from "./Result/Repository";
import { ResultsNumber } from "./ResultsNumber";
import { User } from "./Result/User";

interface ResultsProps {
    dataToDisplay: Array<IRepository | IUser>;
}

export function Results(props:ResultsProps) {
    return <div className="results">
         <ResultsNumber resultsnumber={props.dataToDisplay.length}/>
      {props.dataToDisplay.map((result, idx) => {
        if ("stars" in result) {
          return <Repository
            name={result.name}
            description={result.description}
            stars={result.stars}
            colorOfMainLanguage={result.colorOfMainLanguage}
            mainLanguage={result.mainLanguage}
            lastUpdate={result.lastUpdate}
            key={idx}
          />;
        } else {
          return <User
            name={result.name}
            userName={result.userName}
            avatarUrl={result.avatarUrl}
            description={result.description}
            place={result.place}
            key={idx}
          />;
        }
      })}
    </div>
}