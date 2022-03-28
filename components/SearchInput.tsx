interface SearchInputProps {
onChange(): void;
}


export function SearchInput(props) {
    return <input type="text" onChange={props.handleOnChange}></input>
}
