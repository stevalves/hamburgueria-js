import styled from "styled-components";

export const CartListContainer = styled.ul`
    width: 100%;
    min-width: 280px;
    height: 450px;
    max-height: 450px;

    overflow-y: auto;
    padding: 1rem;

    display:flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: 720px) {
        height: 100vh;
        max-height: inherit;
    }
`