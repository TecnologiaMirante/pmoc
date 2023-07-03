import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { CriarAtivo } from "./pages/criarAtivo";


export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarAtivo />
   </ThemeProvider>
  )
}