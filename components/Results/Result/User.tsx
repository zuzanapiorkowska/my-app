interface UserProps {
  name: string;
  avatarUrl: string;
  description: string;
  place: string;
}

export function User(props: UserProps) {
  return (
    <div className="result">
      <img className="result__avatar" src={props.avatarUrl}></img>
      <div>
      <div className="user-data">
      <h1 className="result__name">{props.name}</h1>
      <div className="result-bottom">
      <img className="star-img" src="/star.png"></img>
      <p className="result_about-me">{props.description}</p>
      <p className="result__place">{props.place}</p>
      </div>
      </div>
      </div>
    </div>
  );
}
