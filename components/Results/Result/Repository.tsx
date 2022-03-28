interface RepositoryProps {
  name: string;
  description: string;
  observers: number;
  colorOfMainLanguage: string;
  mainLanguage: string;
  lastUpdate: string;
}

export function Repository(props: RepositoryProps) {
  return (
    <div className="result">
      <img className="result__avatar" src="/folder.jpg"></img>
      <div>
      <h1 className="result__name">{props.name}</h1>
      <p className="result__description">{props.description}</p>
      <div className="result-bottom">
        <img className="star-img" src="/star.png"></img>
      <p className="result__observers">{props.observers}</p>
      <div className="result__color-of-main-language" style={{backgroundColor: props.colorOfMainLanguage}}></div>
      <span className="result__main-language">{props.mainLanguage}</span>
      <span className="result__last-update">Updated on: {props.lastUpdate}</span>
      </div>
      </div>
    </div>
  );
}
