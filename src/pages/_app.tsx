import { SessionProvider } from "next-auth/react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/component/Header";

const ColorModeContext = React.createContext({toggleColorMode: () => {}});

const App = ({
  Component, pageProps: { session, ...pageProps }
}) => {
        const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
        const colorMode = React.useMemo(
          () => ({
            toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
          })
        );
        const darkThemeChosen = React.useMemo(
          () => 
            createTheme({
              ...darkTheme
            }),
            [],
        )
        const lightThemeChosen = React.useMemo(
          () => 
            createTheme({
              ...lightTheme,
            }),
            [],
        )
      return(
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
          <SessionProvider session={session}>
            <CssBaseline />
            <Header ColorModeContext={ColorModeContext}/>
            <Component {...pageProps} />
          </SessionProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )
}

export default App;