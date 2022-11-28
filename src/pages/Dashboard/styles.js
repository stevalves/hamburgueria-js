import styled from "styled-components";

export const Dashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 720px) {
    main {
      flex-direction: row;
      justify-content: space-between;
      width: calc(80% - 2rem);
      max-width: 70vw;
      margin: 0 auto;
      min-width: 1100px;
      padding: 0 1rem;
    }
  }
`;
