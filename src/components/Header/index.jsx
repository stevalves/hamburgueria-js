import React from "react";
import { InputSearch } from "../InputSearch";
import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo>
          Burguer <span>Kenzie</span>
        </Logo>
        <InputSearch />
      </div>
    </HeaderContainer>
  );
}
