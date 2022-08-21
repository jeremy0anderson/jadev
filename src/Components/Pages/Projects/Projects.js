import img from '../../../assets/images/img.png';
import TechBlog from "../../../assets/images/TechBlog.png";
import BudgetTracker from '../../../assets/images/BudgetTracker.png';
import player_win_blue from '../../../assets/images/player-win-blue.png';
import Notes from '../../../assets/images/notes.png';
import socialNetwork from '../../../assets/images/social-network.png';
import {Card, Container, Icon} from "../../Motion/Motion";
import {Link} from "@mui/material";
import {ComputerOutlined, GitHub} from "@mui/icons-material";
import {Text} from "@nextui-org/react";
import {motion} from "framer-motion";
import React from 'react';


const CRef = React.forwardRef((props, ref)=>{
      return <Card ref={ref} {...props}/>
}), ACard = motion(CRef);

const projects = [
    {
        name: 'Assassination',
        desc: 'A full-stack multiplayer game lobby utilizing the Socket.io Library, Express.js back end, and Handlebars front end.',
        image: player_win_blue,
        demo: 'https://assassination-multiplayer.herokuapp.com/',
        source: "https://github.com/jeremy0anderson/shiny-octo-chainsaw"
    },
    {
        name: 'Assassination[V2]',
        desc: 'The original Assassination multiplayer game lobby utilizing the Socket.io Library, Express.js back end, which is adapted to use GraphQL for the API and React.js for the front end.',
        image: img,
        demo: 'https://assassination-v2.herokuapp.com/',
        source: "https://github.com/jeremy0anderson/assassination-v2"
    },
    {
        name: 'Social Network API',
        desc: 'A scalable base for a social network back end. Includes an API with routes to post thoughts + comments, add friends, and add reactions to comments on posts. Made with Node, Express.js, and MongoDB (Mongoose)',
        image: socialNetwork,
        demo: 'https://drive.google.com/file/d/14QRGIlP37n8v5GMyhs6roavbmUiFg9Xb/view?usp=sharing',
        source: 'https://github.com/jeremy0anderson/NoSQL-Social-Media-API',
    },
    {
        name: 'Tech Blog',
        desc: 'A Blog site that utilizes the Model Controler View -- made with Handlebars and Express.js with its own REST API',
        image: TechBlog,
        demo: 'https://mernstack-tech-blog.herokuapp.com/',
        source: 'https://github.com/jeremy0anderson-dev/MERN-stack-blog',
    },
    {
        name: 'Express.js Notes',
        desc: 'Simple web app to take and save notes',
        image: Notes,
        demo: 'https://expressjs-notes.herokuapp.com',
        source: ''
    },
    {
        name: 'IndexedDB Budget Tracker',
        desc: 'A basic PWA style budget tracker that, when offline, caches user input and then uploads the data to a MongoDB database once back online.',
        image: BudgetTracker,
        demo: 'https://expressjs-notes.herokuapp.com',
        source: 'https://github.com/jeremy0anderson-dev/Expressjs-notes'
    }
];

export function Projects(){
      const [state, setState] = React.useState({
            blurred:true
      })
        const mapped = projects.map((project, index) => {
            const { name, desc, image, demo, source } = project;

            return (
                <Container
                    key={name+"container"}
                    style={{margin: 10, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                      <Text style={{position: 'relative', zIndex: 1010}} h4={true}>{name}</Text>
                        <ACard
                              whileHover={{scale: 1.05}}
                              key={name+"card"}
                              style={{
                                    boxShadow: "2px 5px 7px 0 lightgray",
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat:"no-repeat",
                                    backgroundPosition:"top",
                                    width: 250, height: 400,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 10}}>
                              
                                {/*<motion.img*/}
                                {/*    style={{height: 300, width: 250, position: 'relative', filter: state.blurred?"blur(5px)":"none"}}*/}
                                {/*    whileHover={{filter: "none"}}*/}
                                {/*    key={name+"img"}*/}
                                {/*    alt={name+"-image"}*/}
                                {/*    src={image}/>*/}
                                <Container key={index+'desc'}>
                                      {desc}
                                </Container>
                                <Container style={{display: 'flex'}}>
                                    <Icon
                                        whileHover={{scale: 1.2}}
                                        key={name+"github"}
                                        component={Link}
                                        target={"_blank"}
                                        href={source}>
                                            <GitHub/>
                                    </Icon>
                                    <Icon
                                        whileHover={{scale: 1.2}}
                                        key={name+"demo"}
                                        component={Link}
                                        target={"_blank"}
                                        href={demo}>
                                            <ComputerOutlined key={name+"demo-icon"}/>
                                    </Icon>
                                </Container>
                        </ACard>
                </Container>
            )


        //     return (
        //         <div className="column" key={index} >
        //         <div className="mCard shadow cardOverride">
        //             <div className="mCard-image" style={{ display: 'flex' }}>
        //                 <a className="card-img"
        //                    href={demo}
        //                     style={{
        //                         flex: '1 1 auto',
        //                         minWidth: 300,
        //                         minHeight: 300,
        //                         backgroundImage: `url(${image}`,
        //                         backgroundPosition: "center",
        //                         backgroundSize: 'cover',
        //                         backgroundRepeat: 'no-repeat',
        //                     }}
        //                 />
        //                 <span className="mCard-title">{name}</span>
        //             </div>
        //             <div className="mCard-content" style={{ flex: '1 1 auto' }}>
        //                 <p>{desc}</p>
        //             </div>
        //             <div className="mCard-action iconsContainer">
        //                 <a href={source} target="_blank" rel="noopener noreferrer">
        //                   <span className="icon is-large">
        //                     <i className="fab fa-github fa-lg colorBlack"/>
        //                   </span>
        //                 </a>
        //                 <a href={demo} target="_blank" rel="noopener noreferrer">
        //                   <span className="icon is-large">
        //                     <i className="fas fa-laptop-code fa-lg colorBlack"/>
        //                   </span>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>);
        });
        return (
            <Container style={{display: 'flex', flexDirection: "column", position: "absolute", justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                <Text h1>Projects</Text>
                <Container
                    style={{padding:10, display: 'flex', flexWrap: "wrap", justifyContent: 'center',alignContent: 'center', alignItems: 'center'}}>
                    {mapped}
                </Container>
            </Container>
        );
}

