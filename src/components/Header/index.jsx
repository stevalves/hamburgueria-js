import React from "react";
import { InputSearch } from "../InputSearch";
import { HeaderContainer, Logo } from "./styles";

export function Header({ list, setRender }) {
  return (
    <HeaderContainer>
      <div>
        <Logo>
          Burguer <span>Kenzie</span>
        </Logo>
        <InputSearch list={list} setRender={setRender} />
      </div>
    </HeaderContainer>
  );
}
