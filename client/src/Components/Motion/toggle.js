import {motion} from 'framer-motion';
import React from 'react';

function FToggle(props){
   const lineVariants={
      closed:(line)=>{
         switch(line){
            case 0:return {x1:10,y1:25,x2:40,y2:25};
            case 2: return {x1:25,y1:10,x2:25,y2:40};
            default: return {};
         }
         
      },
      open:(line)=>{
         switch(line){
            case 0:return {x1:25,y1:50,x2:50,y2:25};
            case 2: return {x1:5,y1:20,x2:20,y2:5};
            default:return {};
         }
         
      }
   }
   return(
      <motion.svg
         animate={{rotate:props.open?135:0}}
         transition={{duration: 0.3, type: 'spring', bounce: 0.1}}
         stroke={"rgba(238,238,238,0.91)"}
         viewBox={"0 0 50 50"}
         strokeWidth={2}
         height={50}
         width={50}>
         <motion.line
            custom={0}
            // animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={2}
            // animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
      </motion.svg>
   )
}
export {FToggle}
function Toggle(props){
   const lineVariants={
      closed:(line)=>{
         switch(line){
            case 0: return {x1:0,y1:5,x2:25,y2:5};
            case 1: return {x1:0,y1:12.5,x2:25,y2:12.5};
            case 2: return {x1:0,y1:20,x2:25,y2:20};
            default:return{};
         }
         
      },
      open:(line)=>{
         switch(line){
            case 0:return {x1:5,y1:5,x2:20,y2:20};
            case 1: return {x1:0,y1:12.5,x2:0,y2:12.5};
            case 2: return {x1:5,y1:20,x2:20,y2:5};
            default:return{};
         }
         
      }
   }
   return(
      <motion.svg
         stroke={"rgba(238,238,238,0.91)"}
         viewBox={"0 0 25 25"}
         strokeWidth={2}
         height={25}
         width={25}>
         <motion.line
            custom={0}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={1}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={2}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
      </motion.svg>
   )
}
export default Toggle;