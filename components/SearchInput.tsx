interface SearchInputProps {
onChange(e): void;
}


export function SearchInput(props: SearchInputProps) {
    return <input type="text" onChange={props.onChange}></input>
}
