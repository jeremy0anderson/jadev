import {Container, Button, Card} from "./Motion/Motion";
import Navbar from "./Navigation/Navbar";
import About from './Pages/About/About';
import Contact from "./Pages/Contact/Contact";
import Drawer from "./Navigation/Drawer";
import {Box} from '@mui/material';
import React from 'react';
import {motion} from "framer-motion";
import {Home} from './Pages';
const  BRef = React.forwardRef((props, ref)=>{
      return <Box ref={ref} {...props}/>
}), Div = motion(BRef);

const Components = {Drawer,Container, Button, Navbar, Home, Card, About, Contact, Div};
export default Components;