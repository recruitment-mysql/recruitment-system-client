import { Typography, Box } from '@mui/material';

interface ErrorMessageProps {
    message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <Box sx={{ mt: 5 }}>
            <Typography color="error" align="center">{message}</Typography>
        </Box>
    );
}
