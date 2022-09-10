import React from "react";
import {Dropdown, Navbar as Nav, Text} from "@nextui-org/react";
import {motion, MotionConfig} from 'framer-motion';
import {FiMenu} from "react-icons/fi";
import {CgMenu} from "react-icons/cg";

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
              open:false,
              window:{
                    height:window.innerHeight,
                    width: window.innerWidth
              },
              
        }
        this.toggle=this.toggle.bind(this);
    }
    componentDidMount() {
          window.addEventListener('resize', ()=>{
                this.setState({
                      ...this.state,
                      window: {
                            width: window.innerWidth,
                            height: window.innerHeight
                      }
                })
          })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.props!==nextProps || this.state!==nextState || this.context!==nextContext;}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillUnmount() {
          window.removeEventListener('resize', ()=> {
                this.setState({
                      ...this.state,
                      window: {
                            width: window.innerWidth,
                            height: window.innerHeight
                      }
                })
          });
    }

    toggle(){
          this.setState({
                ...this.state,
                open:!this.state.open
          })
    }
    render(){
          const navbarVariants= {
                closed:  {
                      height: 80
                },
                open: {
                      height: "50vh"
                }
          };
          const toolbarVariants={
                closed:  {
                      height: 60
                },
                open: {
                      height: "calc(50vh - 20px)"
                }
          }
          
          const maxWidth = "calc(100% - 30px)";
        return(
              <MotionConfig transition={{type:'spring', bounce: 0.1, duration: 0.2}}>
                    <motion.div
                          custom={this.state}
                          animate={this.state.open?"open":"closed"}
                          initial={"closed"}
                          variants={navbarVariants}
                          style={{
                                width: this.state.window.width,
                                zIndex: 1000,
                                position: 'fixed',
                                top: 0, left: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backdropFilter: 'blur(20px)'}}
                          id={"Navbar-container"}>
                          <motion.div
                                custom={this.state}
                                animate={this.state.open?"open":"closed"}
                                initial={"closed"}
                                variants={toolbarVariants}
                                style={{
                                      width: "calc(100% - 20px)",
                                      borderRadius:20,
                                      display: 'flex',
                                      alignItems: 'center',
                                      background: "linear-gradient(112deg, hsla(220, 80%, 12%, 0.6) -40%, hsla(180, 50%, 49%, 0.6) 100%)"
                                }}
                                id={"Toolbar"}>
                                <motion.button
                                      id={"expand-menu"}
                                      whileHover={{scale:1.1}}
                                      whileTap={{scale:0.9}}
                                      onClick={this.toggle}
                                      style={{
                                            background: "rgba(0, 0, 0, 0.0)",
                                            display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            position: 'absolute',
                                            top: 20,
                                            borderRadius:15,
                                            width: 40, height: 40, marginInline: 10}}>
                                      <CgMenu size={30}/>
                                </motion.button>
                          </motion.div>
                    </motion.div>
              </MotionConfig>
        )
    }
}
export default Navbar;