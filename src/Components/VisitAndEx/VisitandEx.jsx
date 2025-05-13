import React from "react";
import "../VisitAndEx/VisitandEx.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import imge from "../../Assets/vistcake.jpeg";

const VisitandEx = () => {
  return (
    <Box className="visit-section">
      <Grid container className="visit-container">
        
       
        <Grid item xs={12} sm={6} className="visit-text">
          <Typography variant="h2" className="visit-heading" sx={{color:"white", fontFamily:"cursive"}}>
            Visit & Experience Our Service In Your City
          </Typography>
          <Button sx={{backgroundColor:
            "#20134B", margin:"40px  "
          }} className="visit-button">
            FIND STORES <ArrowRightAltIcon className="arrow-icon" />
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} className="visit-image">
          <img src={imge} alt="Chocolate Cake" />
        </Grid>

      </Grid>
    </Box>
  );
};

export default VisitandEx;
