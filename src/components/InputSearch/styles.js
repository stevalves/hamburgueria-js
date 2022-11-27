import styled from "styled-components";

export const InputSearchContainer = styled.div`
  width: 100%;
  min-width: 300px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  gap: 0.5rem;

  input,
  button {
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
  }

  button {
    background-color: var(--color-primary);
    padding: 0.75rem 1rem;
    color: var(--white);
    width: 25%;
    min-width:110px;
  }

  button:hover {
    background-color: var(--color-primary-50);
    transition: 300ms;
  }

  input {
    width: 75%;
  }

  input::placeholder {
    font-size: var(--headline);
    color: var(--grey-20);
  }

  input:focus {
    outline: none;
  }


  @media (min-width: 720px) {
    width: 30%;
  }
`;
