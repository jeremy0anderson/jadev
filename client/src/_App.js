import React, {Component} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {motion} from 'framer-motion';
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Components/Pages/Home/Home";
import {ContactPage} from "./Components/Pages/Contact/Contact";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import MotionText from "./Components/Motion/Text";
import About from "./Components/Pages/About/About";
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
        const AboutPage= (props)=>{
            return(
               <motion.div
                  initial={{y: "-100%", opacity: 0}}
                  transition={{duration: 0.6}}
                  whileInView={{y: 0, opacity: 1}}
                  id="Landing-about" style={{position: 'relative', top: 60, marginTop: 5, minWidth:390, height: "100vh"}}>
                   <motion.div
                      style={{position: 'relative', x: 0,  opacity: 1, width: "auto", borderBottom: "1px solid black"}}>
                       <MotionText color={"rgb(5,5,5)"} textItems={[{type: "h2", text: "About"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
                   </motion.div>
                   <About/>
               </motion.div>
            )
        }
        const items = [
            {
                text: "Home",
                to: "/",
            },{
                text:"About",
                to: "/about"
            }, {
                text: "Contact",
                to: "/contact"
            }, {
                text: "Blog",
                to: "/posts"
            }
            ];
        return (
            <motion.div>
                <Navbar items={items}/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/login"} elemnt={<Login/>}/>
                </Routes>
            </motion.div>
        );
    }
}

App.propTypes = {};

export default App;
