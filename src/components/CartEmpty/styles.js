import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 10vh 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1ch;

  h4 {
    font-weight: 700;
    font-size: var(--size-head3);
    color: var(--grey-100);
  }

  h5 {
    font-weight: 400;
    font-size: var(--size-head4);
    color: var(--grey-50);
  }
`;
