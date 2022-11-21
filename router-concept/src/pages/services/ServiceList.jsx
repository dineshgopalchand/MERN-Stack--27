import { Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceList = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/5280fca9-497d-4ece-9209-0e0793d39184")
      .then((res) => res.json())
      .then((response) => {
        setServices(response.services);
      });
     
  }, []);
  return (
    <Grid container spacing={2}>
        {services.map((service) => {
          return (
            <Grid item xs={4} key={service.id}>
              <Card sx={{ maxWidth: 345, height: "100%", textAlign: "center" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Link
                    size="small"
                    color="primary"
                    to={`/services/${service.id}/${service.type}`}
                  >
                    Read More
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
  )
}

export default ServiceList