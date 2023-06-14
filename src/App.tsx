import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {  
  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
    <h2>Hello world</h2>
   </ThemeProvider>
  )
}