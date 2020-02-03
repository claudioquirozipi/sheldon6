import MQ from "./media";
import theme from "./theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 6px;
    @media ${MQ.xs} {
      font-size: 8px;
    }
    @media ${MQ.sm} {
      font-size: 16px;
    }
    @media ${MQ.md} {
      font-size: 24px;
    }
    @media ${MQ.lg} {
      font-size: 32px;
    }
    &::-webkit-scrollbar {
      background: transparent;
      width: 0.5em;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.color.primary};
      border-radius: 0.25em;
    }
  }
  .bgPrimary {
    background: ${theme.color.primary}!important;
  }
  .bgSecondary {
    background: ${theme.color.secondary}!important;
  }
  .bgTertiary {
    color: ${theme.color.tertiary} !important;
  }
  .cPrimary {
    color: ${theme.color.primary} !important;
  }
  .cSecondary {
    color: ${theme.color.secondary} !important;
  }
  .cTertiary {
    color: ${theme.color.tertiary} !important;
  }
  .tcPrimary {
    color: ${theme.colorText.primary} !important;
  }
  .tcSecondary {
    color: ${theme.colorText.secondary} !important;
  }
  .tcTertiary {
    color: ${theme.colorText.tertiary} !important;
  }
  h1 {
    color: ${theme.colorText.primary};
  }
  a {
    color: ${theme.color.primary};
    text-decoration: none;
    font-size: 0.5em;
  }
`;

export default GlobalStyle;
