import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem;

  background: var(--grey-0);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  @media (min-width: 720px) {
    flex-direction: row;
    padding: 1rem 0;
    min-width: 1100px;

    &>div {
      flex-direction: row;
      justify-content: space-between;

      width: 70vw;
      max-width: calc(70vw - 1.5%);
      min-width: 1060px;
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.h1`
  color: var(--grey-100);
  font-size: var(--size-head1);
  font-weight: 700;

  & > span {
    color: var(--color-secondary);
    font-size: var(--size-head3);
    font-weight: 500;
  }

`;
