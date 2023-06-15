import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { CriarNobreak } from "./pages/CriarNobreak";

export function App() {
  // mhsdkasbc
  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarNobreak />
   </ThemeProvider>
  )
}