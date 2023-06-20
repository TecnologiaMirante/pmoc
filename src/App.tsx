import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CriarAntena } from "./pages/CriarAntena";
import { CriarExaustor } from "./pages/CriarExaustor";
import { CriarTelemetria } from "./pages/CriarTelemetria";


export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarTelemetria />
   </ThemeProvider>
  )
}