// import original module declarations
import 'styled-components'
import { Theme } from '@material-ui/core'

// and extend them
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors?: {
      primary: string
    }
  }
}
