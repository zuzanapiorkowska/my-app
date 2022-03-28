interface RepositoryProfileProps {
    name: string;
    userName: string;
    avatarUrl: string;
    followers: number;
    following: number;
    stars: number;
}

export function RepositoryProfile(props: RepositoryProfileProps) {
    return <div>
        <img src="/folder.jpg"></img>
        <h1>{props.name}</h1>
        <div className="result-bottom">
      {/* <img className="star-img" src="/star.png"></img>
      <p className="result__follorwers">{props.followers} Followers</p>
      <p className="result__follorwers">{props.following} Following</p> */}
      <img className="star-img" src="/star.png"></img>
      <p className="result__star">{props.stars}</p>
      </div>
    </div>
}