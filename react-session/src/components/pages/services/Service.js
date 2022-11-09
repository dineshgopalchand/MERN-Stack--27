import { Button, IconButton } from '@mui/material';
// import Button from '@mui/material/Button';
import React from 'react'
// import classes from './Service.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc'
import { MdOutlineDeleteOutline } from 'react-icons/md'
const Service = () => {
    return (
        <div>
            <Button variant="contained">Hello World</Button>
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
        </div>
    );
}

export default Service