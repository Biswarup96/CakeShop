import React from 'react';
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import NotFoundImage from '../../Assets/error-404.png';

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: pink[300],
    },
  },
});

const NotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={{ 
            minHeight: '100vh', 
            py: 8,
            animation: 'fadeIn 0.8s ease-in'
          }}
        >
          <Grid2 item xs={12} md={6}>
            <Box sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              animation: 'slideUp 0.8s ease-out forwards',
              px: 2
            }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '4rem', sm: '6rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                404
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary',
                  fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
              >
                Oops! Page Not Found
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: '500px'
                }}
              >
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </Typography>

              <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
                startIcon={<Home />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 5,
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Back to Home
              </Button>
            </Box>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Box
              component="img"
              src={NotFoundImage}
              alt="404 error illustration"
              sx={{
                width: '100%',
                maxWidth: 600,
                height: 'auto',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                animation: 'scaleIn 0.8s ease-out forwards',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(0.98)'
                },
                sx: {
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                  },
                  '@keyframes slideUp': {
                    from: { transform: 'translateY(20px)', opacity: 0 },
                    to: { transform: 'translateY(0)', opacity: 1 }
                  },
                  '@keyframes scaleIn': {
                    from: { transform: 'scale(0.8)', opacity: 0 },
                    to: { transform: 'scale(1)', opacity: 1 }
                  }
                }
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;