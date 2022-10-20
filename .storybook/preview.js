import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { StylesProvider, ThemeProvider, CssBaseline } from '@mui/material'
import { withDesign } from 'storybook-addon-designs'
import '../src/i18n'
import { MemoryRouter } from 'react-router'

import getTheme from '../src/theme'

import viewport from './config/viewport'

global.__BASE_PATH__ = '/'

// PARAMETERS
// see https://storybook.js.org/docs/react/writing-stories/parameters

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport,
  layout: 'fullscreen',
  backgrounds: {
    grid: {
      disable: true,
    },
  },
  options: {
    storySort: {
      order: ['Docs', ['Colors', 'Fonts', 'Text Styles', 'Sizes'], 'Components', 'Templates'],
    },
  },
}

// DECORATORS
// see https://storybook.js.org/docs/react/writing-stories/decorators

const withGlobalStyles = (Story) => (
  <>
    <Story />
  </>
)

const withThemeProvider = (Story) => (
  <StylesProvider injectFirst>
    <StyledThemeProvider theme={getTheme()}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
)

const withContainerStyle = (Story, context) => {
  if (context.parameters.containerStyle) {
    return (
      <div style={context.parameters.containerStyle}>
        <Story />
      </div>
    )
  } else {
    return <Story />
  }
}

const memoryRouter = (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>

export const decorators = [
  withGlobalStyles,
  withThemeProvider,
  withDesign,
  withContainerStyle,
  memoryRouter,
]
