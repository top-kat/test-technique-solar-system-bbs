import React, { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider, createTheme, CssBaseline, Paper } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import getTheme from '../src/theme'

import { APIContextProvider } from './contextes/SolarSystemApiDataContext'
import RoutesComponents from './router/RoutesComponents'
import { app } from './configuration'

const theme = createTheme(getTheme())

const App: FC = (props) => {
  const { children } = props

  const gtmScript = app.GTM_ID && (
    <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${app.GTM_ID}');`}</script>
  )

  const gtmNoScript = app.GTM_ID && (
    <noscript>
      <iframe
        title="gtm"
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
        height="0"
        width="0"
        style={{
          display: 'none',
          visibility: 'hidden',
        }}
      />
    </noscript>
  )

  return (
    <ThemeProvider theme={theme}>
      <APIContextProvider>
        <HelmetProvider>
          <Helmet defaultTitle="boilerplate-react-js - App">{gtmScript}</Helmet>
          <CssBaseline />
          <StyledThemeProvider theme={getTheme() as any}>
            <ThemeProvider theme={getTheme()}>
              <Paper elevation={0}>{children}</Paper>
              <RoutesComponents />
            </ThemeProvider>
          </StyledThemeProvider>
          {gtmNoScript}
        </HelmetProvider>
      </APIContextProvider>
    </ThemeProvider>
  )
}

export default App
