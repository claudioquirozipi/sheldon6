import React from "react";
import GlobalStyle from "./config/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
//Router
import RouterApp from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterApp />
    </ThemeProvider>
  );
};

export default App;
