import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { IconContext } from "react-icons";
import { VisualizarEstacoes } from "./pages/VisualizarEstacoes";

export function App() {

  return (
   <ThemeProvider theme={defalutTheme}>
    <IconContext.Provider value={{ color: '#1D4ED8', size:'20px'  }}>
    <GlobalStyle />
      <VisualizarEstacoes />
    </IconContext.Provider>
   </ThemeProvider>
  )
}