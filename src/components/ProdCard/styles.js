import styled from "styled-components";

export const CardContainer = styled.li`
  min-width: 250px;
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover img {
    transform: scale(1.1);
    transition: 300ms;
  }

  &:hover {
    border: 2px solid var(--grey-100);
    transition: 300ms;
  }

  img {
    background-color: var(--grey-0);
    border-radius: 8px;
  }

  & > div:nth-child(1) {
    width: 100%;
    height: 55%;
    background-color: var(--grey-0);

    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
  }

  & > div:nth-child(2) {
    height: 45%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: var(--size-head3);
    color: var(--grey-100);
  }

  h4 {
    font-weight: 400;
    font-size: var(--caption);
    color: var(--grey-50);
  }

  h3 {
    font-weight: 600;
    font-size: var(--size-head4);
    color: var(--color-primary);
  }

  button {
    font-weight: 600;
    font-size: var(--size-head3);
    color: var(--white);

    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;

    width: max-content;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;
  }

  button:hover {
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
    transition: 300ms;
  }

  @media (min-width: 720px) {
    min-width: 215px;
    width: 30%;
    max-width: 30%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
