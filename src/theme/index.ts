import { createTheme } from '@mui/material'

import { declarations } from './fonts'
import typography from './typography'
import breakpoints from './breakpoints'

const getTheme = () =>
  // responsiveFontSizes(
  createTheme({
    palette: { mode: 'dark' },
    breakpoints: breakpoints,
    typography,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            a: {
              textDecoration: 'none',
            },
            '@font-face': Object.values(declarations).map((declaration) => {
              return {
                fontFamily: declaration.fontFamily,
                fontStyle: 'normal',
                fontDisplay: 'swap',
                fontWeight: declaration.fontWeight,
                src: `
                        url("/fonts/${declaration.basename}/${declaration.basename}.woff2") format("woff2"), 
                        url("/fonts/${declaration.basename}/${declaration.basename}.woff") format("woff");
                      `,
              }
            }),
            html: {
              fontSize: '62.5%',
              '& .hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV': {
                transform: 'scale(0.6)!important',
                left: '0!important',
                [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
                  left: '5px!important',
                  transform: 'scale(0.8)!important',
                },
              },
            },
          },
        },
      },
    },
  })
// )

export default getTheme
