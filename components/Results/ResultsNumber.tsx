interface ResultsNumberProps {
    resultsnumber: number;
}

export function ResultsNumber(props:ResultsNumberProps) {
    return <p className="search-result">{props.resultsnumber} results</p>
}