import React, {Component} from 'react';
import {motion, MotionConfig} from 'framer-motion';
import "./home.css";
import pfp from "../../../assets/images/pfp.webp";
import {default as MotionText} from "../../Motion/Text";
import {IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";
import {Link} from 'react-router-dom';
import * as I from "react-icons/io5";
import {Button} from "@nextui-org/react";

const LRef = React.forwardRef((props, ref)=>{
    return <Link to={props.to} ref={ref} {...props}/>
}), MLink = motion(LRef, {forwardMotionProps:false});

function Socials({inView}){
    return (
       <MotionConfig transition={{duration: 0.8, delay: 0}}>
       <motion.div
          transition={{staggerChildren: 0.05, duration: 0.8}}
           animate={{opacity:1}}
           initial={{opacity: 0}}
           style={{
               height: 80,
               position: 'relative',top:0,
               display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "65%", overflow:'hidden'}}>
                <motion.a
                   inital={{y:200}}
                   animate={{y:inView?0:200}}
                   whileHover={{scale:1.1, transition: {duration: 0.2}}}
                   className={"social-link centered"}
                   style={{width: 60, height: 60, textDecoration: 'none', color: 'white'}}
                   href={"https://github.com/jeremy0anderson"}>
                    <IoLogoGithub size={40}/>
                </motion.a>
                <motion.a
                   inital={{y:200}}
                   animate={{y:inView?0:200}}
                   whileHover={{scale:1.1, transition: {duration: 0.2}}}
                   className={"social-link centered"}
                   style={{width: 60, height: 60, textDecoration: 'none', color: 'white'}}
                   href={"https://linkedin.com/in/jeremyanderson-dev"}>
                    <IoLogoLinkedin size={40}/>
                </motion.a>
                <MLink
                   inital={{y:200}}
                   animate={{y:inView?0:200}}
                   whileHover={{scale:1.1, transition: {duration: 0.2}}}
                   className={"social-link centered"}
                   style={{width: 60, height: 60, textDecoration: 'none', color: 'white'}}
                   to={"/contact"}>
                    <IoMail size={40}/>
                </MLink>
        </motion.div>
       </MotionConfig>
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page1:false,
            page2:false,
            page3:false
        }
        this.firstPageToggle=this.firstPageToggle.bind(this);
        this.secondPageToggle=this.secondPageToggle.bind(this);
        this.thirdPageToggle=this.secondPageToggle.bind(this);
   
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState || this.props !== nextProps;
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {
    }
    firstPageToggle(){
        this.setState({
            ...this.state,
            page1: !this.state.page1
        })
    }
   secondPageToggle(){
      this.setState({
         ...this.state,
         page2: !this.state.page2
      })
   }
   thirdPageToggle(){
      this.setState({
         ...this.state,
         page3: !this.state.page3
      })
   }
    render() {
        const pageVariants = {
            hidden: {
                opacity: 0,
                y: "100%"
            },
            visible: {
                opacity: 1,
                y:0,
                transition:{
                    type:'spring', delay: 0, duration: 0.8, bounce: 0.1
                }
            }
        }
        const containerVariants = {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition:{
                    duration: 0.5, delayChildren: 0.3, staggerChildren:0.05
                }
                
            }
        }
        return (
           <motion.div
              viewport={{once:false,amount:0}}
              whileInView={"visible"}
              initial={"hidden"}
              variants={containerVariants}
              className={"centered"}
              id={"Home-container"}>
              
               <motion.div
                  onViewportEnter={this.firstPageToggle}
                  onViewportLeave={this.firstPageToggle}
                  id={"Home-section-1"}
                  className={"home-section centered"}>
                   <motion.div
                      viewport={{once:true,amount: 0}}
                      whileInView={"visible"}
                      initial={"hidden"}
                      variants={pageVariants}
                      className={"page-content centered"}>
                        <motion.div
                           className={"centered-column"}
                           id={"Home-section-1-text"}>
                            <motion.img
                               id={'Avatar'} src={pfp} alt={"avatar"}/>
                            <MotionText color={"#f1f1f1"} textItems={[
                                {
                                    type: "h3",
                                    text: "Hi, I'm Jeremy.",
                                    style:{marginBottom:20}
                                },
                                {
                                    type: "h5",
                                    text: "Full stack Web Developer | SLC, UT",
                                }
                            ]} visible={this.state.page1} bounce={0.1} custom={0.035} duration={0.5}/>
                            <Socials inView={this.state.page1}/>
                        </motion.div>
                        <motion.div style={{position: 'relative', top: 90}}>
                           <Button.Group color={"warning"} rounded>
                              <Button as={Link} to={"/login"}>Sign In</Button>
                              <Button as={Link} to={"/register"} ghost>Sign Up</Button>
                           </Button.Group>
                        </motion.div>
                      <motion.div initial={{opacity:0}} animate={{
                           height: "auto",
                           opacity:this.state.page1?[0, 0.3, 0]:[0, 0, 0],
                           y:[0, 30, 0]}} transition={{
                            duration:1.2,
                            type:'spring',
                            times: [0,0.5, 1],
                            repeat: Infinity,
                            repeatDelay:0}} style={{
                            opacity: 0,
                            left: "calc(50vw - 25px)",
                            position: 'absolute',
                            top: "75vh",
                            width: 50,
                            margin:5,
                            padding:0}}>
                         <I.IoChevronDownOutline size={30}/>
                      </motion.div>
                   </motion.div>
               </motion.div>
              
               <motion.div
                  onViewportEnter={this.secondPageToggle}
                  onViewportLeave={this.secondPageToggle}
                  id={"Home-section-2"}
                  className={"home-section centered"}>
                   <motion.div
                      viewport={{once:false,amount: 0}}
                      whileInView={"visible"}
                      initial={"hidden"}
                      variants={pageVariants}
                      className={"page-content"}>
                   
                   </motion.div>
               </motion.div>
              
              
               <motion.div
                  onViewportEnter={this.thirdPageToggle}
                  onViewportLeave={this.thirdPageToggle}
                  id={"Home-section-3"}
                  className={"home-section centered"}>
                   <motion.div
                      viewport={{once:false,amount: 0}}
                      whileInView={"visible"}
                      initial={"hidden"}
                      variants={pageVariants}
                      className={"page-content"}>
                   
                   </motion.div>
               </motion.div>
           
           </motion.div>
        )
    }
}
Home.propTypes = {};

export default Home;
