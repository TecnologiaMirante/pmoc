import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CriarTransmissor } from "./pages/CriarTransmissor";



export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarTransmissor />
   </ThemeProvider>
  )
}