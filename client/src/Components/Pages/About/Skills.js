import * as React from "react";
import {motion} from 'framer-motion';
import {Text} from "@nextui-org/react";
import PropTypes, {object} from 'prop-types';

export const skillsArr = [
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
        progress: "90%",
        init:true
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
        progress: "100%",
        init:true
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg',
        progress: "80%",
        init: true
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg',
        progress: "70%",
        init:true
    },
    {
        skill: 'React/Router',
        link: 'https://cdn.svgporn.com/logos/react-router.svg',
        progress: "90%",
        init:false
    },
    {
        skill: 'JWT',
        link: 'https://cdn.svgporn.com/logos/jwt-icon.svg',
        progress: "90%",
        init:false
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg',
        progress: "90%",
        init:false
    },
    {
        skill: 'Framer',
        link: 'https://cdn.svgporn.com/logos/framer.svg',
        progress: "80%",
        init:false
    },
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg',
        progress: "80%",
        init:false
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
        progress: "70%",
        init:false
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
        progress: "100%",
        init:false
    },
    {
        skill: "Sequelize",
        link: "https://cdn.svgporn.com/logos/sequelize.svg",
        progress: "100%",
        init:false
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg',
        progress: "80%",
        init:false
    },
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'VS Code',
        link: 'https://cdn.svgporn.com/logos/visual-studio-code.svg',
        progress: "100%",
        init:false
    },
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
        progress: "80%",
        init:false
    }
];

const containerVariants = {
    hidden:{
        opacity:0,
        y:-50,
        transition: {
            type: 'spring',
            duration:0.7,
            staggerChildren: .045
        }
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            type: "spring", bounce: 0.1,
            duration: 0.8,
            staggerChildren: .045
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y:-200,
        transition: {
            type: "spring", bounce: 0.2,
            duration: 0.7,
        }
    },
    visible:delay =>{
        return {
            opacity: 1,
            y:0,
           transition: {
            type: "spring", bounce: 0.2,
               duration: 1,delay: delay/10
        }
    }
    }
}
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            replay: false
        }
        this.skillRef=React.createRef();
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.state !== nextState || this.props !== nextProps || this.context !== nextContext;}
    componentWillUnmount() {}
    toggle(){
        this.setState({...this.state, open:!this.state.open})
    }
    render(){
        const Div = motion.div;
        const Image = motion.img;
        return(
           <Div
              layout
              layoutScroll={true}
              style={{
                  overflow: 'hidden',
                  width: "100%",
                  padding: 0,
                  display: 'grid',
                  gridTemplate:"auto / 33% 33% 33%",
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: "auto"}}
              initial={{
                  opacity:0,
                  transition: {
                      staggerChildren: .045
                  }
              }}
              whileInView={{
                  opacity: 1,
                  transition: {
                      staggerChildren: .025
                  }
              }}
              
              // initial={"hidden"}
              // variants={containerVariants}
              id="Skills">
               {this.props.skillSet.map(({skill, link, progress, init}, index)=>{
                   return (
                      <Div
                         layout
                         className={"single-skill"}
                         style={{
                             backdropFilter:"blur(10px)",
                             background: `linear-gradient(112deg, hsla(220, 100%, 90%, 0.1) -40%, hsla(190, 100%, 90%, 0.3) 100%)`,
                             borderRadius: 15,
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             margin: "5px 5px",
                             overflow: 'hidden',
                             height: 120,
                             width: 120,
                         }}
                         key={skill+"card"+index}
                         viewport={{once:false, amount:0}}
                         initial={"hidden"}
                         whileInView={"visible"}
                         whileHover={{scale:1.1}}
                         variants={containerVariants}>
                          
                          <Div
                             style={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                             layout
                             variants={itemVariants}
                             key={skill+"-img-container"}>
                              <Image className={"single-skill-img"} width={70} height={70} src={link} alt={skill+"-image"}/>
                              <Text
                                 key={skill+"text"}>
                                  {skill}
                              </Text>
                          </Div>
                          
                       </Div>
                   )
               })}
               
           </Div>
        )
    }
}
Skills.propTypes = {
    skillSet: PropTypes.arrayOf(object)
    
}
export default Skills;