import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../styles/theme'

// 웹서버로 요청이 들어왔을때 가장 먼저 실행되는 컴포넌트 (서버에서 먼저 처리가 됨)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>조상희 포트폴리오</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp