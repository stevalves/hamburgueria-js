import styled from "styled-components";

export const CartContainer = styled.section`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  margin: 0 1rem;
  background-color: var(--grey-0);
  margin-bottom: 1rem;

  width: calc(100% - 2rem);

  & > h3 {
    width: 100%;
    height: 5ch;
    min-height: 50px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: var(--white);
    border-radius: 8px 8px 0 0;
  }

  hr {
    margin: 1rem;
    background: var(--grey-20);
    border-width: 2px;
  }

  @media (min-width: 720px) {
    width: 60%;
    max-width: 335px;
    height: max-content;
    max-height: 60vh;
    margin: 0;
  }
`;
