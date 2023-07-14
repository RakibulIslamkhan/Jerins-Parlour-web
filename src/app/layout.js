"use client";
import ResponsiveAppBar from "@/components/Header";
import "./globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { AuthContext, UserContext } from "@/context/userContext";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            boxShadow: "none",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            boxShadow: "none",
          },
        },
        {
          props: { variant: "text" },
          style: {
            textTransform: "capitalize",
            boxShadow: "none",
          },
        },
      ],
    },
    MuiListItemIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          width: "35px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ff1493",
    },
    secondary: {
      main: "#fff",
    },
  },
});
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeader =
    pathname === "/login" || pathname === "/dashboard" ? false : true;
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext>
          <ThemeProvider theme={theme}>
            {hideHeader && <ResponsiveAppBar />}
            {children}
          </ThemeProvider>
        </UserContext>
      </body>
    </html>
  );
}
