import * as React from 'react';
import PropTypes from 'prop-types';
import skillsArr, {Skills, initSkillsArr} from "./Skills";
import {motion, useInView} from 'framer-motion'

function SkillsInView(props){
      const ref = React.useRef(null);
      const inView = useInView(ref, {once: false});
      
      
      
      return(
            <motion.div
                  ref={ref}>
                  <Skills skillSet={skillsArr}/>
            </motion.div>
      )
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open: true,
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
                            staggerChildren: 0.075
                      }
                }
          };
        return (
           <motion.div
                style={{zIndex:1000, display: 'flex', flexDirection:'column', overflow:'hidden', alignItems:'center', alignContent:'center', height: "calc(100% - 60px)", position: 'relative'}}>
            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    alignContent: "center"}}>
                    <motion.div
                        style={{
                            position: "relative",
                            overflow: "visible",
                            padding: 15,
                            display: 'grid',
                            gridTemplate: "auto auto / auto",
                            justifyContent:'center',
                            alignItems: 'center',
                            width: "100%",
                            margin:10}}>
                     <Skills skillSet={skillsArr}/>
               </motion.div>
            </motion.div>
           </motion.div>
        );
    }
}


export default About;
