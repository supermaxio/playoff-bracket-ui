import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Bracket from './Bracket';

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
                    <Bracket />
                </Box>
            </Box>
        </Container >
    );
}