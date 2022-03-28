import { IRepository, IUser } from "../../interfaces/GitHubData";
import { Repository } from "./Result/Repository";
import { ResultsNumber } from "./ResultsNumber";
import { User } from "./Result/User";

interface ResultsProps {
    dataToDisplay: Array<IRepository | IUser>;
}

export function Results(props:ResultsProps) {

  function setColor(language:string): string {
    switch (language) {
      case "TypeScript":
        return "blue"
        break;
      case "JavaScript ":
        return "yellow"
        break;
      case "Java":
        return "orange"
        break;
      case "html" || "HTML":
        return "cyan"
        break;
      case "Ruby":
        return "red"
        break;
      case "C#":
        return "olive"
        break;
      case "C++":
        return "violet"
        break;
      case "Assembly":
        return "brown"
        break;
      case "Jupiter Notebook":
        return "lightblue"
        break;
      case "Command Lisp":
        return "pink"
        break;
      default:
        return "black"
        break;
    }

  }
    return <div className="results">
         <ResultsNumber resultsnumber={props.dataToDisplay.length}/>
      {props.dataToDisplay.map((result, idx) => {
        if ("stars" in result) {
          return <Repository
            name={result.name}
            description={result.description}
            stars={result.stars}
            color={setColor(result.mainLanguage)}
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