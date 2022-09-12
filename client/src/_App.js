import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import {motion} from 'framer-motion';
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Components/Pages/Home/_Home";
import {ContactPage} from "./Components/Pages/Contact/Contact";
import Register from "./Components/User/Register";
import MotionText from "./Components/Motion/Text";
import About from "./Components/Pages/About/About";
import Login from "./Components/User/Login";
import User from "./Components/User/User";
import {FToggle} from "./Components/Motion/toggle";
import Chat from "./Components/Pages/Contact/Chat";
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
                <div style={{position: "fixed", bottom: 20, right: 20, zIndex: 10000,}}>
                    <FAB/>
                </div>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/posts"} element={<div/>}/>
                    <Route path={"/user/:id"} element={<User/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                </Routes>
            </motion.div>
        );
    }
}

App.propTypes = {};

export default App;
class FAB extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
        this.toggle=this.toggle.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    toggle(){
        this.setState({
            ...this.state,
            open:!this.state.open
        });
    }
    render() {
        return (
           <motion.div
              style={{
                  background: `linear-gradient(112deg, hsla(50, 80%, 32%, 0.3) -40%, hsla(10, 80%, 49%, 0.5) 100%)`,
                  zIndex:10000, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 22}}
              animate={{
                width: this.state.open?"calc(100vw - 40px)":50
              }}
              transition={{duration: 0.4, type:'spring', bounce: 0.1}}
              initial={{width: 50, height: 50,}}
           >
                <motion.button
                   onClick={this.toggle}
                   className={"centered-column"}
                   style={{
                       position: 'absolute',
                       bottom:0, right: 0,
                       width: 50, maxHeight: 50,}}>
                    <FToggle open={this.state.open}/>
                </motion.button>
           </motion.div>
        );
    }
}


export {FAB}

