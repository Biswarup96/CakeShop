import React from 'react';
import { Box, Container, Typography, Grid2, useTheme } from '@mui/material';
import AboutUsImage from '../../Assets/Untitled-design-37.png'; // Add your image

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h1" 
          sx={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 2,
            textTransform: 'uppercase'
          }}
        >
          About Us
        </Typography>
      </Box>

      <Grid2 container spacing={6} alignItems="center">
        <Grid2 item xs={12} md={6}>
          <Box sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            '& img': {
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }
          }}>
            <img 
              src={AboutUsImage} 
              alt="Our History" 
            />
          </Box>
        </Grid2>

        <Grid2 item xs={12} md={6}>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: '2rem',
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 4
            }}
          >
            Our Story
          </Typography>

          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              mb: 3
            }}
          >
            Our journey began with one humble shop in Fort, Mumbai and grew to over one thousand 
            locations throughout India under the inspiring vision of our founder, Hussein Khorakiwala 
            in the early 1956.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              mb: 3
            }}
          >
            Since then, our family has combined their years of experience with the vision of a 
            community of collaborative shop owners, suppliers and other partners working together 
            to create a brand name in the market to grow their business to what it is today.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              fontWeight: 500
            }}
          >
            In order to achieve this, the family offers franchises to budding entrepreneurs & 
            distributors partnering with them to ensure success and excellence.
          </Typography>
        </Grid2>
      </Grid2>

      {/* Timeline Section */}
      <Box sx={{ 
        mt: 8,
        p: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 1
      }}>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <Typography variant="h3" sx={{ 
              fontSize: '2rem',
              fontWeight: 600,
              color: theme.palette.primary.main
            }}>
              1956
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Founded in Mumbai
            </Typography>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Typography variant="h3" sx={{ 
              fontSize: '2rem',
              fontWeight: 600,
              color: theme.palette.primary.main
            }}>
              1000+
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Locations Across India
            </Typography>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Typography variant="h3" sx={{ 
              fontSize: '2rem',
              fontWeight: 600,
              color: theme.palette.primary.main
            }}>
              Family
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Owned & Operated
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default AboutUs;