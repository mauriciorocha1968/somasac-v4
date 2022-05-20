import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  body::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    background-color: #fbfbfb;
    opacity: 0.6;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px #fc893f;
    opacity: 0.6;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #415772;
    opacity: 0.8;
  }
`
