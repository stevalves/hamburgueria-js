import styled from "styled-components";

export const ProdList = styled.ul`
  display: flex;
  margin-left: 1rem;

  overflow-x: auto;

  @media (min-width: 720px) {
    margin-left: 0;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    min-width: 650px;
  }
`;
