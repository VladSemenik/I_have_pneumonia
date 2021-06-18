import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    main: '#215684',
  },
  typography: {
    fontFamily: 'M2, sans-serif',
  },
});
theme = responsiveFontSizes(theme);

export { theme }
