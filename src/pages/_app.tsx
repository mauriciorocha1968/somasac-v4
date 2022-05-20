import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { SnackbarProvider } from 'notistack'

import GlobalStyle from '../styles/global'

import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default MyApp
