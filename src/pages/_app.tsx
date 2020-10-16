import React from 'react'
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import Layout from "../components/Layout";
import theme from '../styles/theme';
import PlatformProvider from '../context/Platform';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <PlatformProvider>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </PlatformProvider>
    </ThemeProvider>
  )
}

export default MyApp;
