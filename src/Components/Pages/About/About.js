import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import {Container, Card} from "../../Motion/Motion";
import {Text} from "@nextui-org/react";
import skillsArr, {Skills} from "./Skills";
import LogoFn from '../../Logo/Logo';
import {motion} from 'framer-motion';
import AnimatedText from "../../Motion/AnimatedTxt";

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            replay:true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
          const container = {
                hidden: {
                      opacity:0
                },
                visible: {
                      opacity: 1,
                      transition: {
                            staggerChildren: 0.035
                      }
                }
          };
        return (
           <M.Box
                style={{zIndex:1000, display: 'flex', flexDirection:'column', overflow:'visible', alignItems:'center', alignContent:'center', height: "calc(100vh - 60px)", position: 'relative'}}>
            <M.Container maxWidth={"md"} style={{display: 'flex', justifyContent: 'center', alignItems: "center", alignContent: "center"}}>
            <Card
                     elevation={5}
                   style={{
                         position: "relative",
                         overflow: "visible",
                         padding: 15, display: 'grid', gridTemplate: "auto auto / auto", justifyContent:'center', alignItems: 'center', width: "85%", margin:10}}>
                    
                     <Skills skillSet={skillsArr}>
                           <motion.div
                                 initial="hidden"
                                 // animate="visible"
                                 animate={this.state.replay ? "visible" : "hidden"}
                                 variants={container}
                                 style={{marginBottom: 10, position: "relative",zIndex:1000, background:'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)', borderRadius:10, width: "100%", display: 'flex', boxShadow:"2px 2px 8px", flexWrap: "wrap", alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                 <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading2", text: "Skills"}} speed={"slow"}/>
                           </motion.div>
                     </Skills>
               </Card>
            </M.Container>
                 {/*<M.Container style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>*/}
                 {/*      <Card*/}
                 {/*            elevation={5}*/}
                 {/*            style={{*/}
                 {/*                  position: "relative",*/}
                 {/*                  overflow: "visible",*/}
                 {/*                  padding: 15, display: 'grid', gridTemplate: "auto auto / auto", justifyContent:'center', alignContent: 'center', width: "85%", margin:10}}>*/}
                 {/*            <motion.div*/}
                 {/*                  initial="hidden"*/}
                 {/*                  // animate="visible"*/}
                 {/*                  animate={this.state.replay ? "visible" : "hidden"}*/}
                 {/*                  variants={container}*/}
                 {/*                  style={{marginBottom: 10, position: "relative",zIndex:1000, background:'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)', borderRadius:10, width: "100%", display: 'flex', boxShadow:"2px 2px 8px", flexWrap: "wrap", justifyContent: 'center' }}>*/}
                 {/*                  <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading2", text: "Backend"}} speed={"slow"}/>*/}
                 {/*            </motion.div>*/}
                 {/*            <Skills skillSet={skillsArr.backEnd}/>*/}
                 {/*      </Card>*/}
                 {/*</M.Container>*/}
                 {/*<M.Container style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>*/}
                 {/*      <Card*/}
                 {/*            elevation={5}*/}
                 {/*            style={{*/}
                 {/*                  position: "relative",*/}
                 {/*                  overflow: "visible",*/}
                 {/*                  padding: 15, display: 'grid', gridTemplate: "auto auto / auto", justifyContent:'center', alignContent: 'center', width: "85%", margin:10}}>*/}
                 {/*            <motion.div*/}
                 {/*                  initial="hidden"*/}
                 {/*                  // animate="visible"*/}
                 {/*                  animate={this.state.replay ? "visible" : "hidden"}*/}
                 {/*                  variants={container}*/}
                 {/*                  style={{marginBottom: 10, position: "relative",zIndex:1000, background:'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)', borderRadius:10, width: "100%", display: 'flex', boxShadow:"2px 2px 8px", flexWrap: "wrap", justifyContent: 'center' }}>*/}
                 {/*                  <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading2", text: "Frontend"}} speed={"slow"}/>*/}
                 {/*            </motion.div>*/}
                 {/*            <Skills skillSet={skillsArr.frontEnd}/>*/}
                 {/*      </Card>*/}
                 {/*</M.Container>*/}
                
               {/*  <Card*/}
               {/*        elevation={5}*/}
               {/*    style={{position: 'relative', y:15, padding: 15, overflow: "visible", display: 'flex', justifyContent:'center', alignContent: 'center',width: "85%", margin:10}}>*/}
               {/*    <Skills skillSet={skillsArr.backEnd}/>*/}
               {/*        <motion.div*/}
               {/*              initial="hidden"*/}
               {/*              // animate="visible"*/}
               {/*              animate={this.state.replay ? "visible" : "hidden"}*/}
               {/*              variants={container}*/}
               {/*              style={{position: "relative", y:20,zIndex:1000, background: 'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)', borderRadius:10,  padding: "10px",width: "80%", display: 'flex', boxShadow:"2px 2px 8px", flexWrap: "wrap" }}>*/}
               {/*              <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading2", text: "Backend"}} speed={"slow"}/>*/}
               {/*        </motion.div>*/}
               {/*</Card>*/}
               {/*  <motion.div*/}
               {/*        initial="hidden"*/}
               {/*        // animate="visible"*/}
               {/*        animate={this.state.replay ? "visible" : "hidden"}*/}
               {/*        variants={container}*/}
               {/*        style={{position: 'relative', y:20,zIndex:1000, background:'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)', borderRadius:10,  padding: "10px",width: "80%", display: 'flex', boxShadow:"2px 2px 8px" }}>*/}
               {/*        <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading2", text: "Frontend"}} speed={"slow"}/>*/}
               {/*  </motion.div>*/}
               {/*  <Card*/}
               {/*        elevation={5}*/}
               {/*        style={{position: 'relative', y:15,padding: 15, overflow: "visible", display: 'flex', justifyContent:'center', flexWrap: "wrap",alignContent: 'center',width: "85%", margin:10}}>*/}
               {/*        <Skills skillSet={skillsArr.frontEnd}/>*/}
               {/*  </Card>*/}
           </M.Box>
        );
    }
}


export default About;
