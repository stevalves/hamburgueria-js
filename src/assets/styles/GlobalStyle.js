import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #27ae60;
        --color-primary-50: #93d7af;
        --color-secondary: #eb5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #e0e0e0;
        --grey-0: #f5f5f5;

        --fd-negative: #e60000;
        --fd-warning: #ffcd07;
        --fd-sucess: #168821;
        --fd-information: #155bcb;

        --size-head1: 1.625rem;
        --size-head2: 1.375rem;
        --size-head3: 1.125rem;
        --size-head4: .875rem;

        --headline: 1rem;
        --caption: .75rem;
    }
`;

export default GlobalStyle