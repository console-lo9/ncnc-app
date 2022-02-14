import { css, Global, keyframes } from '@emotion/react';

export const reset = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }
    ul {
        padding: 0;
        border: 0;
        list-style: none;
    }
    button,
    input {
        outline: none;
        cursor: pointer;
        overflow: hidden;
    }
    button,
    select {
        text-transform: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        font-weight: normal;
        line-height: 1.5em;
    }
    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-family: inherit;
        line-height: inherit;
        font-size: inherit;
    }
    /* Default CSS */
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        margin: 0;
        background-color: #fff;
        color: #222;
        height: 100vh;
    }
    #root {
        height: 100%;
    }
`;
