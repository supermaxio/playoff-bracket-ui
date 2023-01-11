import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from '../miscellaneous/copyright';
import ToggleSelection from '../toggles/ToggleSelection';

export default function CreateBracket() {

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box>
                    <ToggleSelection />
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
    );
}