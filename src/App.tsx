import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";

export function App() {  
  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
    <Home />
   </ThemeProvider>
  )
}