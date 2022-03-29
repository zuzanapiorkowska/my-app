interface UserProfileProps {
  name: string;
  userName: string;
  avatarUrl: string;
  followers: number;
  following: number;
}

export function UserProfile(props: UserProfileProps) {
  return (
    <div className="user">
      <img className="user__avatar" src={props.avatarUrl}></img>
      <h1>{props.name}</h1>
      <p className="user__user-name">{props.userName}</p>
      <div className="user-bottom">
        <img className="star-img" src="/followers.jpg"></img>
        <p className="user__followers">{props.followers} Followers</p>
        <p className="user__followers">{props.following} Following</p>
        <img className="star-img" src="/star.png"></img>
      </div>
    </div>
  );
}
