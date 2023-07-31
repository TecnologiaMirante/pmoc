import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { IconContext } from "react-icons";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/app.routes";

export function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={defalutTheme}>
        <IconContext.Provider value={{ color: "#1D4ED8", size: "20px" }}>
          <GlobalStyle />
          <AppRoutes />
        </IconContext.Provider>
      </ThemeProvider>
    </AuthProvider>

  );
}
