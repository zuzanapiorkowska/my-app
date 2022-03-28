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
    <>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.observers}</p>
      <div style={{backgroundColor: props.colorOfMainLanguage, width: 20, height: 20}}></div>
      <span>{props.mainLanguage}</span>
      <span>Updated on: {props.lastUpdate}</span>
    </>
  );
}
