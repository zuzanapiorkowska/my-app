import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";

interface HeaderProps {
  onChange(e: any): void;
}

export function Header(props: HeaderProps) {
  return (
    <div className="header">
      <Logo />
      <SearchInput onChange={(e) => props.onChange(e)} />
    </div>
  );
}
