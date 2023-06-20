import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CriarAntena } from "./pages/CriarAntena";
import { CriarArcondicionado } from "./pages/CriarArcondicionado";
import { CriarCabo } from "./pages/CriarCabo";
import { CriarCombinador } from "./pages/CriarCombinador";
import { CriarDisjuntor } from "./pages/CriarDisjuntor";
import { CriarDPS } from "./pages/CriarDPS";
import { CriarExaustor } from "./pages/CriarExaustor";
import { CriarNobreak } from "./pages/CriarNobreak";
import { CriarParabolica } from "./pages/CriarParabolica";
import { CriarReceptor } from "./pages/CriarReceptor";
import { CriarSwitch } from "./pages/CriarSwitch";
import { CriarTelemetria } from "./pages/CriarTelemetria";
import { CriarTorre } from "./pages/CriarTorre";
import { CriarTransmissor } from "./pages/CriarTransmissor";


export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <GlobalStyle />
      <CriarTransmissor />
   </ThemeProvider>
  )
}