interface ResultsNumberProps {
    resultsnumber: number;
}

export function ResultsNumber(props:ResultsNumberProps) {
    return <p>{props.resultsnumber} results</p>
}