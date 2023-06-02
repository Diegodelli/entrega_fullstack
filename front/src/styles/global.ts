import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

:root {
    --color-primary: #142687;
    --color-primary-focus: #0c508e;
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
    --black-opacity: rgba(0, 0, 0, 0.5);

    --gray-scale-1: #121214;
    --gray-scale-2: #212529;
    --gray-scale-3: #343B41;
    --gray-scale-4: #868E96;
    --gray-scale-5: #F8F9FA;

    --title-size1: 1.375rem;
    --title-size2: 1.125rem;

    --text-size1: 0.875rem;
    --text-size2: 0.75rem;

    --btn-input-height: 3rem;
    --btn-height2: 2rem;

    --border-radius: 4px;

    --weigth-bold: 700;
    --weigth-semiBold: 600;
    --weigth-medium: 500;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-scale-1);
}
`;

export default GlobalStyle;
