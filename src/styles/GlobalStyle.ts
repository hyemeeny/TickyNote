'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #eee;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
`;
