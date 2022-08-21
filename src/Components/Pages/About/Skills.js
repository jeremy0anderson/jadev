import * as M from "@mui/material";
import React from "react";
import {Card} from '../../Motion/Motion'
import {motion} from 'framer-motion';

const frontEnd = [


]

const backEnd = [

]
const languages= [


]
const editors=[


]
const skillsArr = [
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg'
    },
    {
        skill: 'Framer Motion',
        link: 'https://cdn.svgporn.com/logos/framer.svg'
    },
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
    },
    {
        skill: 'Socket.io client',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg'
    },
    {
        skill: "Sequelize",
        link: "https://cdn.svgporn.com/logos/sequelize.svg"
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg'
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg'
    },
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg'
    },
    {
        skill: 'VS Code',
        link: 'https://cdn.svgporn.com/logos/visual-studio-code.svg'
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
    },
    
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg'
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg'
    },
]

;

export function Skills(props){
    return (
        <M.Container maxWidth={"sm"}
              sx={{
            height: "100%",
            display: "flex"
            , flexWrap: "wrap"}}>
            {props.children}
        {props.skillSet.map(({skill, link}, index)=>{
                return(
                    <motion.div
                        animate={{ opacity: 1}}
                        whileTap={{scale:1.1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, delay: index * 0.15}}
                        style={{
                            opacity:0,
                            borderRadius: 10,
                            background: "whitesmoke",
                            position: "relative",
                            padding: "10px", margin:"5px",width: 100, height: 100, display: 'flex', flexDirection: 'column', justifyContent:"center", alignContent:"center", alignItems: "center",}}
                        key={skill}>
                        <img key={skill+"img"} src={link} alt={skill} width={60} height={60}/>
                        <M.Typography key={skill+"txt"} variant={"subtitle2"}>{skill}</M.Typography>
                    </motion.div>
                )
            })}
        </M.Container>
    )
}
export default skillsArr;