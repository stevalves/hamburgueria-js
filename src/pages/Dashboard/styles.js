import styled from "styled-components";

export const Dashboard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    main {
        display:flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (min-width: 720px) {
        main {
            flex-direction: row;
            width: 85vw;
            min-width:1100px;
            margin: 0 auto;
        }
    }
`