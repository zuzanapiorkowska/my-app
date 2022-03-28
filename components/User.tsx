interface UserProps {
  name: string;
  avatarUrl: string;
  description: string;
  place: string;
}

export function User(props: UserProps) {
  return (
    <>
      <img src={props.avatarUrl}></img>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.place}</p>
    </>
  );
}
