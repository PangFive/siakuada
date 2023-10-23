"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { store } from "@/store/store";
import { useSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { Provider } from "react-redux";
import NextTopLoader from 'nextjs-toploader';

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/utils/i18n";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  const customizer = useSelector((state: RootState) => state.customizer);

  return (
    <>
      {/* <NextTopLoader color={theme.palette.primary.main}  /> */}
      <ThemeProvider theme={theme}>
        <RTL direction={customizer.activeDir}>
          <CssBaseline />
          {children}
        </RTL>
      </ThemeProvider>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 50);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {loading ? (
            <MyApp>
              {children}
            </MyApp>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Provider>
      </body>
    </html>
  );
}
