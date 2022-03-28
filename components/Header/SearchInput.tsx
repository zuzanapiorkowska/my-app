interface SearchInputProps {
onChange(e: any): void;
}


export function SearchInput(props: SearchInputProps) {
    return <input type="text" placeholder="Search" className="search-input" onChange={props.onChange}></input>
}
