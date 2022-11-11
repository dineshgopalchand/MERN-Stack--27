import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
import React from 'react'
import classes from './Service.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc'
import { MdOutlineDeleteOutline } from 'react-icons/md';
import serviceImg from '../../../../src/media/images/services.jpg';
import { SiGoogleclassroom } from 'react-icons/si';
import { useState } from 'react';
import { useEffect } from 'react';
const Service = () => {
    // const someImg='https://rukminim1.flixcart.com/image/312/312/jp1i93k0/laundry-detergent/e/r/d/1-herbal-wash-patanjali-original-imafbcnf6gasdeh5.jpeg?q=70';
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/5280fca9-497d-4ece-9209-0e0793d39184')
            .then(res => res.json())
            .then(response => {
                // console.log(response);
                setServices(response.services);
            });
    }, []);


    return (
        <div>
            <img src={serviceImg} alt="service" className={classes.serviceimg} />
            {/* <img src={someImg} alt="service" /> */}
            <Container >
                <h2>Service</h2>
                <div className="summry">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ipsum tempore ratione amet reiciendis illo id quis qui. Consequuntur, optio?</p>
                    <p>Provident cumque voluptate iusto repellendus debitis, molestiae exercitationem, totam similique voluptates accusamus fuga quis eius porro dolores modi odit excepturi?</p>
                </div>
                <hr />

                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h3>Services list</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton aria-label="delete">
                            <MdOutlineDeleteOutline />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <MdOutlineDeleteOutline />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <FcAlarmClock />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <FaShoppingCart />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>

                    {services.map(service => {
                        return (
                            <Grid item xs={4} key={service.id}>
                                <Card sx={{ maxWidth: 345, height: '100%', textAlign: 'center' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <div>
                                                <SiGoogleclassroom style={{ height: '100px', width: '100px' }} />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {service.title}
                                            </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button size="small" color="primary">
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                );
                    })}


            </Grid>

        </Container>
        </div >
    );
}

export default Service;


