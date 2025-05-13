import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"; 
import { valentine } from "../../Data/Data";
import "../Valentie/Valentie.css"; 

const Valentie = () => {
  return (
    <section className="valentine">
      <div className="container">
        <div className="valentie-heading">
          <h2>Valentine Special</h2>
        </div>
        <div className="mui-card">
          {Array.isArray(valentine?.valentineimg) ? (
            valentine.valentineimg.map((item, index) => (
              <Card key={index} className="card-flex" sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.img}
                  title={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Valentie;
