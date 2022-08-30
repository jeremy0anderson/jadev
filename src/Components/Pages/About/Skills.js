import * as M from "@mui/material";
import * as React from "react";
import {motion} from 'framer-motion';
import {Spacer, Text} from "@nextui-org/react";
import * as I from '@mui/icons-material';
import PropTypes, {object} from 'prop-types';
import {Components} from 'ja-ui-react';
const btnVars = {
    collapsed: {
        opacity:1,
        background: "hsla(23,99%,41%,0.8)",
        transition:{
            duration: 0.7,
            type:"spring"
        }
    },
    expanded: {
        opacity: 1,
        background: "hsla(0,0%,64%,0.8)",
        transition:{
            duration: 0.7,
            type:"spring"
        }
    }

}
const textVars = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y:0, transition:{staggerChildren: 0.0235, type:'spring', duration: 0.1, bounce: 0.2}}
}
const container  = {
    hidden:(props)=>{
        return {
            overflow: "hidden",
            opacity: props.first?1:0,
            height: props.first?"auto":0,
            transition: {
                staggerChildren: .0325
            }
        }
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            type: "spring", bounce: 0.5,
            duration: 0.9,
            staggerChildren: .0525
        }
    }
};
export const initSkillsArr=[
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
        progress: "90%"
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
        progress: "100%"
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg',
        progress: "80%"
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg',
        progress: "70%"
    }
]

const skillsArr = [
    {
        skill: 'React/Router',
        link: 'https://cdn.svgporn.com/logos/react-router.svg',
        progress: "90%"
    },
    {
        skill: 'JWT',
        link: 'https://cdn.svgporn.com/logos/jwt-icon.svg',
        progress: "90%"
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg',
        progress: "90%"
    },
    {
        skill: 'Framer',
        link: 'https://cdn.svgporn.com/logos/framer.svg',
        progress: "80%"
    },
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
        progress: "100%"
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
        progress: "100%"
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
        progress: "100%"
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
        progress: "100%"
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg',
        progress: "80%"
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
        progress: "70%"
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
        progress: "100%"
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
        progress: "100%"
    },
    {
        skill: "Sequelize",
        link: "https://cdn.svgporn.com/logos/sequelize.svg",
        progress: "100%"
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg',
        progress: "80%"
    },
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg',
        progress: "100%"
    },
    {
        skill: 'VS Code',
        link: 'https://cdn.svgporn.com/logos/visual-studio-code.svg',
        progress: "100%"
    },
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
        progress: "80%"
    }
];
const moreSkillsArr = [

];
const Box = motion.div;
const CRef = React.forwardRef((props, ref)=> {
    return <M.Container ref={ref}/>
}), Container = motion(CRef);
class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open:false,
            replay:false
        }
        this.toggle=this.toggle.bind(this);
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.state!==nextState || this.props!==nextProps || this.context!==nextContext;}
    componentWillUnmount() {}

    toggle(){
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    }
    replay(){
        this.setState({
            ...this.state,
            open: !this.state.open,
        });
        setTimeout(()=>{
            this.setState({
                ...this.state,
                open: !this.state.open,
            })
        },1000)

    }
    Set =(props)=>{
        return (
            <Box
                animate={this.state.open?"visible":"hidden"}
                initial={"hidden"}
                style={{display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignItems: "center", alignContent: "center"}}
                custom={props}
                variants={container}>
                {props.skillSet.map(({skill, link, progress}, index)=>{
                    let p = skill;
                    return(
                        <Box
                            onHoverStart={()=>{
                                switch(progress){
                                    case "100%": p = 10+"/10"; break;
                                    case "90%": p = 9+"/10"; break;
                                    case "80%": p = 8+"/10"; break;
                                    case "70%": p = 7+"/10"; break;
                                }
                                return document.getElementById(skill+"typography").textContent = p;}}
                            onHoverEnd={()=>{return document.getElementById(skill+"typography").textContent = skill;}}
                            onTap={()=>{switch(progress){
                                case "100%": document.getElementById(skill+"typography").textContent===skill
                                    ?document.getElementById(skill+"typography").textContent = 10+"/10"
                                    :document.getElementById(skill+"typography").textContent=skill;  break;
                                case "90%": document.getElementById(skill+"typography").textContent===skill
                                    ?document.getElementById(skill+"typography").textContent = 9+"/10"
                                    :document.getElementById(skill+"typography").textContent=skill;  break;
                                case "80%": document.getElementById(skill+"typography").textContent===skill
                                    ?document.getElementById(skill+"typography").textContent = 8+"/10"
                                    :document.getElementById(skill+"typography").textContent=skill;  break;
                                case "70%": document.getElementById(skill+"typography").textContent===skill
                                    ?document.getElementById(skill+"typography").textContent = 7+"/10"
                                    :document.getElementById(skill+"typography").textContent=skill;  break;
                            }}}
                            onTapCancel={()=>{return document.getElementById(skill+"typography").textContent = skill;}}
                            animate={this.state.open
                                ?{ opacity: 1, y:0}
                                :{opacity:props.first?1:0, y:0}}
                            transition={this.state.open
                                ?{type: 'spring', bounce: 0.1,duration: 0.4, delay: index/15*0.4}
                                :{type: 'spring', bounce: 0.1,duration: 0.4, delay: index/30*0.4}}
                            style={{
                                overflow:'hidden',
                                y: "100%",
                                borderRadius: 10,
                                background: "rgba(200, 200, 200, 0.1)",
                                padding: "10px",
                                margin:"5px",
                                width: 100,
                                height: 110,
                                display: 'flex',
                                justifyContent:"center",
                                alignContent:"center",
                                alignItems: "center"}}
                            key={skill}>
                            <motion.div
                                id={skill+'main'}
                                whileTap={{scale:1.1}}
                                whileHover={{scale: 1.1}}
                                transition={{duration:0.2}}
                                style={{overflow: "hidden",
                                    y: "100%",
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    alignItems: "center",
                                    alignContent: 'center'}}
                                animate={{y:this.state.open?0:0}}>
                                <img key={skill+"img"} src={link} alt={skill} width={70} height={70}/>
                                <Spacer x={0} y={1}/>
                                <div
                                    style={{
                                        height: 25,
                                        overflow: "hidden",
                                        width: 90,
                                        borderRadius: 6,
                                        display: 'flex',
                                        background: 'rgba(100, 100, 100, 0.2)',
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        alignContent: 'center'}}>
                                    <motion.div
                                        transition={{duration: 0.5, delay: index/12*0.4}}
                                        animate={{x:0}}
                                        style={{borderRadius:6, x:"-150%",width: progress, position: "absolute",left:0,height: 25, background:"linear-gradient(90deg, rgba(125, 10, 201, 0.7) 0%, rgba(125, 0, 100, 0.7) 100%)",justifyContent: "center", alignItems: 'center', alignContent: 'center'}}>
                                    </motion.div>
                                    <Text id={skill+"typography"} style={{ width: "100%", display: 'flex', justifyContent:"center", color:'whitesmoke', position: "absolute"}} key={skill+"txt"}>{p}</Text>
                                </div>
                            </motion.div>
                        </Box>
                    )
                })}
            </Box>
        )
    }
    render(){
        return(
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: "column",
                    position: 'relative',
                    top: 0, left: 0,
                    maxWidth: 1000,
                    minWidth: 380,
                    width: "100%",
                    height: "100%"
            }}>
                <this.Set first={true} skillSet={initSkillsArr}/>
                <this.Set first={false} skillSet={this.props.skillSet}/>
                <Spacer x={0} y={1}/>
                <motion.button
                    style={{justifySelf: "center", alignSelf: "center",background: 'rgb(30, 30, 30)',color:'white', border:"none", borderRadius: 4, padding: 10, width: "60%"}}
                    onClick={this.toggle}>
                    {this.state.open?"Show Less":"Show More"}
                </motion.button>
            </motion.div>
        )
    }
}

Skills.propTypes = {
    skillSet: PropTypes.arrayOf(object)

}
export default skillsArr;
export {Skills, moreSkillsArr}
const f = ()=> (
    <div>
    {/*<Box*/}
{/*        initial={"hidden"}*/}
{/*        variants={container}*/}
{/*        animate={this.state.open?"visible":"hidden"}*/}
{/*        style={{display: 'flex', flexWrap:"wrap", justifyContent: 'center', alignItems: 'center', alignContent:'center', overflow: "hidden"}}>*/}
{/*    {this.props.skillSet.map(({skill, link, progress}, index)=>{*/}
{/*        let p = skill;*/}
{/*        return(*/}
{/*            <Box*/}
{/*                onHoverStart={()=>{*/}
{/*                    switch(progress){*/}
{/*                        case "100%": p = 10+"/10"; break;*/}
{/*                        case "90%": p = 9+"/10"; break;*/}
{/*                        case "80%": p = 8+"/10"; break;*/}
{/*                        case "70%": p = 7+"/10"; break;*/}
{/*                    }*/}
{/*                    return document.getElementById(skill+"typography").textContent = p;}}*/}
{/*                onHoverEnd={()=>{return document.getElementById(skill+"typography").textContent = skill;}}*/}
{/*                onTap={()=>{switch(progress){*/}
{/*                        case "100%": document.getElementById(skill+"typography").textContent===skill*/}
{/*                                ?document.getElementById(skill+"typography").textContent = 10+"/10"*/}
{/*                                :document.getElementById(skill+"typography").textContent=skill;  break;*/}
{/*                        case "90%": document.getElementById(skill+"typography").textContent===skill*/}
{/*                                ?document.getElementById(skill+"typography").textContent = 9+"/10"*/}
{/*                                :document.getElementById(skill+"typography").textContent=skill;  break;*/}
{/*                        case "80%": document.getElementById(skill+"typography").textContent===skill*/}
{/*                                ?document.getElementById(skill+"typography").textContent = 8+"/10"*/}
{/*                                :document.getElementById(skill+"typography").textContent=skill;  break;*/}
{/*                        case "70%": document.getElementById(skill+"typography").textContent===skill*/}
{/*                                ?document.getElementById(skill+"typography").textContent = 7+"/10"*/}
{/*                                :document.getElementById(skill+"typography").textContent=skill;  break;*/}
{/*                    }}}*/}
{/*                onTapCancel={()=>{return document.getElementById(skill+"typography").textContent = skill;}}*/}
{/*                animate={this.state.open*/}
{/*                    ?{ opacity: 1, y:0}*/}
{/*                    :{opacity:0, y:200}}*/}
{/*                transition={this.state.open*/}
{/*                    ?{type: 'spring', bounce: 0.1,duration: 0.4, delay: index/15*0.4}*/}
{/*                    :{type: 'spring', bounce: 0.1,duration: 0.4, delay: index/30*0.4}}*/}
{/*                style={{*/}
{/*                    overflow:'hidden',*/}
{/*                    y: "100%",*/}
{/*                    borderRadius: 10,*/}
{/*                    background: "rgba(200, 200, 200, 0.1)",*/}
{/*                    padding: "10px",*/}
{/*                    margin:"5px",*/}
{/*                    width: 120,*/}
{/*                    height: 150,*/}
{/*                    display: 'flex',*/}
{/*                    justifyContent:"center",*/}
{/*                    alignContent:"center",*/}
{/*                    alignItems: "center"}}*/}
{/*                key={skill}>*/}
{/*                <motion.div*/}
{/*                    id={skill+'main'}*/}
{/*                    whileTap={{scale:1.1}}*/}
{/*                    whileHover={{scale: 1.1}}*/}
{/*                    transition={{duration:0.2}}*/}
{/*                    style={{overflow: "hidden",*/}
{/*                        y: "100%",*/}
{/*                        display: 'flex',*/}
{/*                        justifyContent: 'space-between',*/}
{/*                        flexDirection: 'column',*/}
{/*                        alignItems: "center",*/}
{/*                        alignContent: 'center'}}*/}
{/*                    animate={{y:this.state.open?0:0}}>*/}
{/*                        <img key={skill+"img"} src={link} alt={skill} width={80} height={80}/>*/}
{/*                        <Spacer x={0} y={1}/>*/}
{/*                        <div*/}
{/*                            style={{*/}
{/*                                height: 30,*/}
{/*                                overflow: "hidden",*/}
{/*                                width: 120,*/}
{/*                                borderRadius: 6,*/}
{/*                                display: 'flex',*/}
{/*                                background: 'rgba(100, 100, 100, 0.2)',*/}
{/*                                justifyContent: "center",*/}
{/*                                alignItems: 'center',*/}
{/*                                alignContent: 'center'}}>*/}
{/*                                    <motion.div*/}
{/*                                        transition={{duration: 0.5, delay: index/12*0.4}}*/}
{/*                                        animate={this.state.open?{x:0}:{x:"-150%"}}*/}
{/*                                        style={{borderRadius:6, x:"-150%",width: progress, position: "absolute",left:0,height: 30, background:"linear-gradient(90deg, rgba(125, 10, 201, 0.4) 0%, rgba(125, 0, 100, 0.4) 100%)",justifyContent: "center", alignItems: 'center', alignContent: 'center'}}>*/}
{/*                                    </motion.div>*/}
{/*                                    <M.Typography id={skill+"typography"} style={{ width: "100%", display: 'flex', justifyContent:"center", color:'black', position: "absolute"}} key={skill+"txt"} variant={"subtitle2"}>{p}</M.Typography>*/}
{/*                    </div>*/}
{/*                </motion.div>*/}
{/*            </Box>*/}
{/*            )*/}
{/*        })}*/}
{/*    </Box>*/}
    </div>
)