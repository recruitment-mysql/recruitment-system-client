import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Recruitment System
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
