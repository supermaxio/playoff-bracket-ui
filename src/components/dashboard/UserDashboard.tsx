import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ViewBracket from '../brackets/ViewBracket';
import Users from '../users/UserTable';




function DashboardContent() {

    return (
        <Box>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Live games */}
                    <Grid item xs={12} md={6}>
                        <ViewBracket />
                    </Grid>
                    {/* User list */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Users />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}