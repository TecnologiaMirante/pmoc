import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { EditarAntena } from "./pages/EditarAntena";
import { EditarArcondicionado } from "./pages/EditarArcondicionado";
import { CriarEstacao } from "./pages/CriarEstacao";


export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarEstacao />
   </ThemeProvider>
  )
}