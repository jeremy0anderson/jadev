import React, {Component} from 'react';
import {motion} from "framer-motion";
import pfp from '../../../assets/images/pfp.webp';
import {Components} from 'ja-ui-react';


const {MotionText} = Components;


// const CardRef = React.forwardRef((props, ref)=>{
//     return(<M.Card ref={ref} {...props}/>)
// }), Card = motion(CardRef);

const Box = motion.div;
const container={
    hidden: { opacity: 0, y: 100},
    visible: {
        opacity: 1,
            y:0,
            transition: {
            delayChildren: 0.1,
                staggerChildren: 0.04
        }
    }
};



class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            replay: true,
            circleReplay: true,
        }
        this.handleReplay=this.handleReplay.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    handleReplay = () => {
        this.setState({
            ...this.state,
            replay:!this.state.replay
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                replay:true
            });
        }, 200);
    }
    handleCircleReplay = () => {
        this.setState({
            ...this.state,
            circleReplay:!this.state.circleReplay
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                circleReplay:true
            });
        }, 800);
    }

    render() {
        const placeholderText = [
            { type: "heading1", text: "Hi," },
            { type: "heading1", text: "I'm Jeremy."},
            { type: "paragraph", text: "Full-stack Web Developer | Salt Lake City, UT"}
            // { type: "paragraph", text: "Full-stack Web Developer | Salt Lake City, UT"},
            // { type: "paragraph", text: "Salt Lake City, UT ]"}

        ];

        const container = {
            visible: {
                transition: {
                    staggerChildren: 0.035
                }
            }
        };
        return (
            <div style={{position: "relative"}}>
            <motion.div
                id={"Home"}
                style={{
                    height: "auto",
                    width: "100%",
                    display: 'flex', justifyContent: "center",alignItems: "center",
                    flexDirection: "column"
                }}
                transition={{}}
                animate={{}}>

                    <motion.div
                        style={{
                            position: "absolute", top:115, height: "100%", padding:10,
                            display: 'flex', justifyContent: "center", alignItems: "middle", alignContent: "center"}}>
                        {/*/!*<JCard style={{width: 370,zIndex: 1000, display: 'flex', position: 'absolute', justifyContent: "center", alignItems: 'middle', alignContent: "center", height: 230}}>*!/*/}
                        {/*    <motion.div*/}
                        {/*        style={{position: "relative", y: 10, zIndex: 1000, height: "100%", margin: 0, justifyContent: "center", alignItems: "middle", alignContent: "center"}}*/}
                        {/*        // className="App"*/}
                        {/*        initial="hidden"*/}
                        {/*        // animate="visible"*/}
                        {/*        animate={this.state.replay ? "visible" : "hidden"}*/}
                        {/*        variants={container}>*/}
                        {/*        <motion.div*/}
                        {/*            style={{display: 'flex', flexDirection: "column",*/}
                        {/*                width:{*/}
                        {/*                    xs: 380,*/}
                        {/*                    sm: 480,*/}

                        {/*                }*/}
                        {/*                ,margin:0}}*/}
                        {/*            className="container">*/}
                                    {/*<motion.div variants={container} animate={"visible"} initial={"hidden"} style={{overflow: 'wrap'}}>*/}
                                    {/*    <AnimatedTextInner type={"paragraph"} text={"Hi,"} />*/}
                                    {/*</motion.div>*/}
                                    {/*<motion.div variants={container} animate={"visible"} initial={"hidden"} style={{overflow: 'wrap'}}>*/}
                                    {/*    <AnimatedTextInner {...placeholderText[1]} speed={"slow"} />*/}
                                    {/*</motion.div>*/}
                                    {/*<motion.div variants={container} animate={"visible"} initial={"hidden"} style={{overflow: 'wrap'}}>*/}
                                    {/*    <AnimatedTextInner {...placeholderText[2]}/>*/}
                                    {/*</motion.div>*/}
                                    {/*<Container*/}
                                    {/*    style={{x: "10%"}}*/}
                                    {/*    transition={{duration: 1.5, type: "spring", bounce: 0.2}}*/}
                                    {/*    animate={{x: 0}}>*/}
                                    {/*    <Spacer x={0} y={1}/>*/}
                                    {/*</Container>*/}
                                </motion.div>
                            </motion.div>
                        {/*</JCard>*/}
                    {/*</motion.div>*/}
            {/*</motion.div>*/}

            </div>
        );
    }
}


Home.propTypes = {};

export default Home;
