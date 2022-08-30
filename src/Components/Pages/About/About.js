import * as React from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import {Container, Card} from "../../Motion/Motion";
import skillsArr, {Skills, initSkillsArr} from "./Skills";


class About extends React.Component {
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
                style={{zIndex:1000, display: 'flex', flexDirection:'column', overflow:'visible', alignItems:'center', alignContent:'center', height: "calc(100% - 60px)", position: 'relative'}}>
            <M.Container
                maxWidth={"md"}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    alignContent: "center"}}>
                    <Card
                        elevation={5}
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
               </Card>
            </M.Container>
           </M.Box>
        );
    }
}


export default About;
