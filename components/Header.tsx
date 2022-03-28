import { SearchInput } from "./SearchInput";

interface HeaderProps {
    onChange(e: any): void;
}

export function Header(props: HeaderProps) {
    return <>
    <Logo />
    <SearchInput onChange={()=>props.onChange(e)} />
    </>
}

