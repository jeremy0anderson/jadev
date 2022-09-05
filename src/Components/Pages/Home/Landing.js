import React from 'react';
import {motion} from 'framer-motion';
import {Components} from 'ja-ui-react';
import MotionText from "../../Motion/Text";
import pfp from "../../../assets/images/pfp.webp";
import About from "../About/About";
import {Container as Div} from '@nextui-org/react';
import Contact from "../Contact/Contact";
import cert from '../../../assets/images/coding-bootcamp-full-stack-developer-certificate.1.webp';
// const {MotionText} = Components;

const AvatarRef = React.forwardRef((props, ref)=>{
    return <img src={props.src} alt={props.alt} ref={ref} {...props}/>
}), Avatar = motion(AvatarRef);

const Circle = (props) =>{
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 0.3 + i * 0.5;
            return {
                pathLength: 1.01,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 2.5},
                    opacity: { delay, duration: 0.1 }
                }
            };
        }
    };
    return(
        <motion.svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            initial="hidden"
            animate={props.visible? "visible":"hidden"}
            style={{position:'absolute', zIndex: 1001,left: "calc(50% - 90px)", top: -10, borderRadius: "50%"}}
        >
            <motion.circle
                cx="90"
                cy="90"
                r="90"
                fill={"none"}
                strokeWidth={15}
                stroke="#f55a30"
                variants={draw}
                custom={0}
            />
        </motion.svg>
    )
}

const Me =()=>(
    <motion.div id={"Me"}
        style={{
            top:0,
            borderRadius: "50%",
            position: 'relative',
            height: 300, width: 300,
            display: 'flex', alignItems: "center", alignContent: "center", justifyContent: 'center'
        }}
        whileTap={{scale: 0.98}}>
        <Avatar id={"Avatar"}
            style={{zIndex:2001, margin:0, borderRadius: "50%", boxShadow: "2px 2px 18px 2px rgba(15, 15, 15, 0.8)"}}
            src={pfp} alt={"avatar"}/>
    </motion.div>
)
function Landing(props){
    const [state, setState] = React.useState({
        visible:true
    })
    return(
            <div   id={"Landing"} style={{alignContent: "center",display: 'flex', flexDirection: "column",justifyContent:'center', minWidth:390, width: "fit-content"}}>
                <div
                  style={{
                        position: "relative",
                        height: "100vh",
                        justifyContent: "center", alignItems:'center',width: "100%",display: 'flex', flexDirection: "column"}}>
                        <div
                              style={{display: 'flex',alignItems: "center", justifyContent:"center"}}>
                              <Me/>
                        </div>
                {/*<motion.img*/}
                {/*    drag*/}
                {/*    dragMomentum={false}*/}
                {/*    animate={{opacity:1}}*/}
                {/*    initial={{opacity:0}}*/}
                {/*    transition={{duration: 0.5, type: 'spring', bounce: 0.4}}*/}
                {/*    whileDrag={{scale:1.7, zIndex:20011, boxShadow: "2px 2px 9px 0 lightgray", borderRadius: "0 50% 50% 50%"}}*/}
                {/*    src={cert} alt={"certification"} width={120} height={120} style={{scale: 1, y:0, x:0, zIndex:1000, position: 'absolute',top: 0,right:0}}/>*/}
                <motion.div
                    transition={{duration:0.5}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}>
                    <MotionText color={"#000"} textItems={[{type: "h1", text: "Hi"},{type: "h3", text: "I'm Jeremy,"},{type: "h6", text: "Fullstack Web Developer | SLC, UT"}]} visible={true} bounce={0.4} custom={0.04} duration={0.4}/>
                </motion.div>
                </div>
            <motion.div
                  initial={{x: "-100%", opacity: 0}}
                  transition={{duration: 0.6}}
                  whileInView={{x: 0, opacity: 1}}
                  id="Landing-about" style={{marginTop: 5, minWidth:390, height: "100%"}}>
                <motion.div
                    style={{position: 'relative', x: 0,  opacity: 1, width: "auto", borderBottom: "1px solid black"}}>
                    <MotionText color={"rgb(5,5,5)"} textItems={[{type: "h2", text: "About"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
                </motion.div>
                <About/>
            </motion.div>
            <motion.div
                  initial={{x: "-100%", opacity: 0}}
                  transition={{duration: 0.6}}
                  whileInView={{x: 0, opacity: 1}}
                  id={"Landing-contact"} style={{marginTop: 15, minWidth: 390, height: "100%"}}>
                <motion.div
                    style={{position: 'relative', left: 0, width: "auto",  borderBottom: "1px solid black"}}>
                    <MotionText color={"rgb(0,0,0)"} textItems={[{type: "h2", text: "Contact"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
                </motion.div>
                <Contact/>
            </motion.div>
            </div>
    )

}

export default Landing;