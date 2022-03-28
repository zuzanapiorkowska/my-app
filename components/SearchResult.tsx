import { redirect } from "next/dist/server/api-utils";

interface SearchResultProps {
  name: string;
  description: string;
  observers: number;
  mainLanguage: string;
  colorOfMainLanguagE: string;
  lastUpdate: string;
}

export function SearchResult(props: SearchResultProps) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.observers}</p>
      <div style={{backgroundColor: "red", width:10, height:10}}></div>
      <span>{props.mainLanguage}</span>
      <span>Updated on: {props.lastUpdate}</span>
    </>
  );
}
