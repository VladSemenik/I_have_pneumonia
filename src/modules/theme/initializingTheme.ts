import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { colors } from './colors'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    }
  },
  typography: {
    fontFamily: 'M2, sans-serif',
    body1: {
      fontFamily: 'Baloo, sans-serif',
    }
  },
});
theme = responsiveFontSizes(theme);

export { theme }
