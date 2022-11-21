import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id, type } = useParams();
  const [service, setService] = useState([]);
  //   console.log({ id, type });
  useEffect(() => {
    fetch("https://mocki.io/v1/5280fca9-497d-4ece-9209-0e0793d39184")
      .then((res) => res.json())
      .then((response) => {
        // console.log(response.services);
        const service = response.services.filter(
          (service) => service.id === +id && service.type === type
        );
        // console.log({ service });
        setService(service[0] || {});
      });
  }, [id, type]);
  return (
    <>
      <Card sx={{ textAlign: "center" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ServiceDetails;
