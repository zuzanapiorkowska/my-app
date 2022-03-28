interface ResultListProps {
  name: string;
  description: string;
  observers: number;
  mainLanguage: string;
  colorOfMainLanguagE: string;
  lastUpdate: string;
}

const results = {
  date: "22 Aug 2016",
};

export function ResultList() {
  return (
    <>
      <h1>name</h1>
      <p>describe</p>
      <p>main language</p>
      <p>Updated on: {results.date}</p>
    </>
  );
}
