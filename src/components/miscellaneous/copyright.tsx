import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
const theme = createTheme();

export default function Copyright(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid>

            <Typography variant="body2" color="text.secondary" align="center" {...props}>
              {'All Logos Copyright © '}
              <Link color="inherit" href="https://nfl.com/">
                NFL
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
          <Grid>

            <Typography variant="body2" color="text.secondary" align="center" {...props}>
              {'Source code: '}
              <Link color="inherit" href="https://github.com/supermaxio/playoff-bracket-ui">
                Frontend
              </Link>{' '}
              {'   '}
              <Link color="inherit" href="https://github.com/supermaxio/playoff-bracket-api">
                Backend
              </Link>{' '}
            </Typography>

          </Grid>

        </Box>
      </Container>
    </ThemeProvider>
  );
}