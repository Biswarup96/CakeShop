import React from 'react';
import { 
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

const Wedding = () => {
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune'
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={4} sx={{ 
        p: 4,
        borderRadius: 4,
        background: 'linear-gradient(45deg, #fff5f5 0%, #f8f0fb 100%)',
        animation: 'slideUp 0.6s ease-out'
      }}>
        <Typography variant="h3" sx={{ 
          mb: 4,
          fontWeight: 700,
          textAlign: 'center',
          color: 'primary.main',
          background: 'linear-gradient(45deg, #d6336c 0%, #ae52d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Plan Your Dream Wedding Cake!
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              placeholder="Enter your name"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main'
                  }
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              placeholder="Enter your phone"
              type="tel"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Event Date"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Select a City"
              defaultValue=""
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Notes"
              multiline
              rows={4}
              placeholder="Write any additional notes here..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 8,
                py: 2,
                borderRadius: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #d6336c 0%, #ae52d4 100%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(214, 51, 108, 0.3)'
                }
              }}
            >
              ORDER NOW
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
};

export default Wedding;