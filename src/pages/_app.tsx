import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../styles/theme'
import Router from "next/router";
import { useState, useEffect } from 'react'
import { LayoutProvider } from '../../Provider/LayoutProvider'

// 웹서버로 요청이 들어왔을때 가장 먼저 실행되는 컴포넌트 (서버에서 먼저 처리가 됨)
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
useEffect(() => {
  const showRoute = [
    //"/",
    // "/notes/:category",
    // "/entry/:titleUrl/:id",
    // "/guestbook",
  ];
  const start = () => {
    setLoading(true);
  };
  const end = () => {
    setLoading(false);
  };
  Router.events.on("routeChangeStart", start);
  Router.events.on("routeChangeComplete", end);
  Router.events.on("routeChangeError", end);
  return () => {
    Router.events.off("routeChangeStart", start);
    Router.events.off("routeChangeComplete", end);
    Router.events.off("routeChangeError", end);
  };
}, []);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>조상희 포트폴리오</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      {loading && <LayoutProvider />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp