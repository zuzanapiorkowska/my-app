interface UserProfileProps {
    name: string;
    userName: string;
    avatarUrl: string;
    followers: number;
    following: number;
    stars: number;
}

export function UserProfile(props: UserProfileProps) {
    return <div>
        <img src={props.avatarUrl}></img>
        <h1>{props.name}</h1>
        <p>{props.userName}</p>
        <div className="result-bottom">
      <img className="star-img" src="/star.png"></img>
      <p className="result__follorwers">{props.followers} Followers</p>
      <p className="result__follorwers">{props.following} Following</p>
      <img className="star-img" src="/star.png"></img>
      <p className="result__star">{props.stars}</p>
      </div>
    </div>
}