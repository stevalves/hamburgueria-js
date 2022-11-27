import styled from "styled-components";

export const CartCardContainer = styled.li`
  width: 100%;
  border-radius: 5px;

  display: flex;

  &:hover img {
    transform: scale(1.3);
    transition: 300ms;
  }

  &:hover button {
    text-decoration: underline;
    transition: 300ms;
  }

  div:nth-child(1) {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    max-height: 100px;
    min-height: 100px;
    overflow: hidden;

    background: var(--grey-20);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1ch;
    margin: 1ch 0 1ch 1ch;
  }

  div:nth-child(2) h2 {
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: 700;
    font-size: var(--size-head3);
    color: var(--grey-100);
  }

  div:nth-child(2) h3 {
    font-weight: 400;
    font-size: var(--caption);
    color: var(--grey-50);
  }

  button {
    font-weight: 500;
    font-size: var(--caption);
    color: var(--grey-50);
    align-self: flex-start;
    margin-top: 3ch;
  }

  img {
    width: 80%;
    transform: scale(1.2);
  }
`;
