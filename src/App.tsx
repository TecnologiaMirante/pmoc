import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CriarEstacao } from "./pages/CriarEstacao";
import { IconContext } from "react-icons";
import { Home } from "./pages/Home";
import { CriarAntena } from "./pages/CriarAntena";
import { EditarAntena } from "./pages/EditarAntena";

export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <IconContext.Provider value={{ color: '#1D4ED8', size:'20px'  }}>
    <GlobalStyle />
      <EditarAntena />
    </IconContext.Provider>
   </ThemeProvider>
  )
}