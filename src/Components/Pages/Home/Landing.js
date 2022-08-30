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
            position:'relative',
            borderRadius: "50%",
            height: 200, width: 200,
            display: 'flex', alignItems: "center", alignContent: "center"
        }}
        whileTap={{scale: 0.98}}>
        <Avatar id={"Avatar"}
            style={{zIndex:2001, margin:0, borderRadius: "50%", boxShadow: "2px 2px 18px 2px rgba(15, 15, 15, 0.8)"}}
            src={pfp} alt={"avatar"} width={200} height={200}/>
    </motion.div>
)
function Landing(props){
    const [state, setState] = React.useState({
        visible:true
    })
    return(
        <div
            style={{display: 'flex',flexDirection: "column", justifyContent: 'center', alignItems:'center', justifySelf: "center"}}>
            <div   id={"Landing"} style={{display: 'flex', justifyContent:'center', minWidth:390}}>
                <div>
                <Me/>
                <motion.img
                    drag
                    dragMomentum={false}
                    animate={{opacity:1}}
                    initial={{opacity:0}}
                    transition={{duration: 0.5, type: 'spring', bounce: 0.4}}
                    whileDrag={{scale:1.7, zIndex:20011, boxShadow: "2px 2px 9px 0 lightgray", borderRadius: "0 50% 50% 50%"}}
                    src={cert} alt={"certification"} width={120} height={120} style={{scale: 1, y:0, x:0, zIndex:1000, position: 'absolute',top: 0,right:0}}/>
                </div>
                <motion.div
                    transition={{duration:2}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}>
                    <MotionText color={"#000"} textItems={[{type: "h2", text: "Hi"},{type: "h2", text: "I'm Jeremy,"},{type: "h6", text: "Fullstack Web Developer | SLC, UT"}]} visible={true} bounce={0.4} custom={0.04} duration={0.4}/>
                </motion.div>
            </div>
            <div id="Landing-about" style={{marginTop: 15, minWidth:390}}>
                <motion.div
                    style={{position: 'relative', left: 65, width: "auto", maxWidth: 300}}>
                    <MotionText color={"rgb(5,5,5)"} textItems={[{type: "h2", text: "About Me"}]} visible={true} bounce={0.4} custom={0.09} duration={2}/>
                </motion.div>
                <About/>
            </div>
            <div>
                <motion.div
                    style={{position: 'relative', left: 65, width: "auto", maxWidth: 300}}>
                    <MotionText color={"rgb(0,0,0)"} textItems={[{type: "h2", text: "Contact"}]} visible={true} bounce={0.4} custom={0.09} duration={2}/>
                </motion.div>
                <Contact/>
            </div>
        </div>
    )

}

export default Landing;