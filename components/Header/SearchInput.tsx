interface SearchInputProps {
onChange(e: string): void;
}


export function SearchInput(props: SearchInputProps) {
    return <input type="text" placeholder="Search" className="search-input" onChange={(e)=> {
        const value= e.target.value;
        props.onChange(value)
    }}>
        </input>
}
