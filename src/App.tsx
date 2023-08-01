import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/app.routes";
import { CustomIcon } from "./styles/Icons";

export function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={defalutTheme}>
        <GlobalStyle />
        <CustomIcon color="#1D4ED8">
          <AppRoutes />
        </CustomIcon>
      </ThemeProvider>
    </AuthProvider>

  );
}
