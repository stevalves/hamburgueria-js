import styled from "styled-components";

export const CardTotalContainer = styled.div`
  height: 40%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
  }

  div h2 {
    font-weight: 600;
    font-size: var(--size-head4);
    color: var(--grey-100);
  }

  div h4 {
    font-weight: 600;
    font-size: var(--size-head4);
    color: var(--grey-50);
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 1rem 0;
    background-color: var(--grey-20);
    border-radius: 8px;

    color: var(--grey-50);
    font-size: var(--headline);
    font-weight: 600;
  }

  button:hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
    transition: 300ms;
  }
`;
