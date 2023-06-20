import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CriarAntena } from "./pages/CriarAntena";


export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarAntena />
   </ThemeProvider>
  )
}