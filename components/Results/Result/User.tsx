import  Router from "next/router";

interface UserProps {
  name: string;
  userName: string;
  avatarUrl: string;
  description: string;
  place: string;
}

export function User(props: UserProps) {
  return (
    <div className="result" onClick={()=> Router.push(`/users/${props.userName}`)}>
      <img className="result__avatar" src={props.avatarUrl}></img>
      <div>
      <div className="user-data">
      <h1 className="result__name">{props.name}</h1>
      <p className="result__user-name">{props.userName}</p>
      <p className="result__about-me">{props.description}</p>
      <p className="result-bottom result__observers">{props.place}</p>
      </div>
      </div>
    </div>
  );
}
