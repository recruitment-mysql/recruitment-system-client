import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
