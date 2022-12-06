import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #373737;
    --blue: #2ED5DF;
    --purple: #A569E5;

    --text: #ffffff;

    --background-header: #2C2C2C;
    --background-clean: #484848
}

*{
    margin: 0;
    padding: 0;
}

body{
    background: var(--background);
}

html{
    @media (max-width: 1080px) {
        font-size: 93,75%;
    }

    @media (max-width: 720px) {
    font-size: 83,5%;
    }
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

button, body, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text);
}

h6, h5, h4, h3, h2, h1{
    font-weight: 400;
}
`;
