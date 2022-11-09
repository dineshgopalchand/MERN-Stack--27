import { Button, IconButton } from '@mui/material';
// import Button from '@mui/material/Button';
import React from 'react'
// import classes from './Service.module.css';
const Service = () => {
    return (
        <div>
            <Button variant="contained">Hello World</Button>
            <IconButton aria-label="delete">
               Delete
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                delete
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                alarm
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                cart
            </IconButton>
        </div>
    );
}

export default Service