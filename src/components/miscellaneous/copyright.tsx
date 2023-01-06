import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Container, Grid } from '@mui/material';

export default function Copyright(props: any) {
  return (
      <Container component="main" maxWidth="xs">
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
  );
}