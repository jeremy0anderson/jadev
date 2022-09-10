import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {default as C} from './Components';
import {Projects} from "./Components/Pages/Projects/Projects";
import {Navigation, Nav} from 'ja-ui-react';
import MotionText from "./Components/Motion/Text";
import {Dropdown, Text} from "@nextui-org/react";
import {Octokit, App as OApp} from "octokit";
import {Link, useNavigate} from 'react-router-dom';
import cert from './assets/images/coding-bootcamp-full-stack-developer-certificate.1.webp';
import {useEffect} from "react";
import {motion} from "framer-motion";
import Home from './Components/Pages/Home/Home';
const {Contact, About, Container, Navbar} = C;

const octokit = new Octokit(process.env.REACT_APP_GH_ACCESS_TOKEN);
    octokit.request('GET /users/jeremy0anderson/repos').then(({data})=> {
        localStorage.setItem('gh-data', JSON.stringify(data));
    });
    const AboutPage= (props)=>{
          return(
                <motion.div
                      initial={{x: "-100%", opacity: 0}}
                      transition={{duration: 0.6}}
                      whileInView={{x: 0, opacity: 1}}
                      id="Landing-about" style={{position: 'relative', top: 60, marginTop: 5, minWidth:390, height: "100vh"}}>
                      <motion.div
                            style={{position: 'relative', x: 0,  opacity: 1, width: "auto", borderBottom: "1px solid black"}}>
                            <MotionText color={"rgb(5,5,5)"} textItems={[{type: "h2", text: "About"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
                      </motion.div>
                      <About/>
                </motion.div>
          )
    }
    
    
class App extends React.Component{
      constructor(props) {
            super(props);
            this.state={
                  
            }
      }
      render(){
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
                  text: "Projects",
                  to: "/projects"
               }]
            return(
                  <div style={{width: "auto"}}>
                              {/*<Navigation anchor={"top"} items={items}  menuBackground={'rgb(40,40,40)'} background={'rgb(20, 20, 20)'}>*/}
                              
                              {/*</Navigation>*/}
                        <Navbar/>
                        <Routes>
                              <Route path={"/"} element={<Home/>}/>
                              <Route path={"/about"} element={<AboutPage/>}/>
                              <Route path={"/contact"} element={
                                    <div>
                                          <Contact/>
                                    </div>}/>
                              <Route path={"/projects/ja-ui-react"} element={<iframe  src={"https://github.com/jeremy0anderson/j-ui/tree/main/jda-ui"}>NPM</iframe>}/>
                        </Routes>
                  </div>
            )
      }      
}
// function _App(props){
//     const items = ["Home", "About", "Contact", "Projects"]
//     const [checked, setChecked] = React.useState(false);
//     const [selected, setSelected] = React.useState({})
//     const background = "linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)";
//     function toggle(){
//         setChecked(!checked);
//     }
//     const nav = useNavigate();
//     let r = JSON.parse(localStorage.getItem('gh-data'));
//     // r=r.filter((x)=>{
//     //     return x.name==="shiny-octo-chainsaw"
//     // })
//     return(
//         <div style={{width: "auto"}}>
//             <div style={{zIndex: 10000, width: "100vw", height: 60, position: "fixed"}}>
//               <Navigation anchor={"top"} items={items}  menuBackground={'rgb(40,40,40)'} background={'rgb(20, 20, 20)'}>
//                        {/*<div id={"Dropdown-container"}*/}
//                   {/*    style={{display: 'flex'}}>*/}
//                   {/*    /!*<div id={"DropDowns"} style={{display: 'flex', justifyContent:"center", alignItems: 'center',marginInline:10}}>*!/*/}
//                   {/*    /!*<Dropdown*!/*/}
//                   {/*    /!*    triggerType={"dialog"}>*!/*/}
//                   {/*    /!*    <Dropdown.Button*!/*/}
//                   {/*    /!*          size={"sm"} color={"white"}>*!/*/}
//                   {/*    /!*        Backend*!/*/}
//                   {/*    /!*    </Dropdown.Button>*!/*/}
//                   {/*    /!*    <Dropdown.Menu onAction={(key)=>{*!/*/}
//                   {/*    /!*        nav(`/projects/${key}`);*!/*/}
//                   {/*    /!*    }}>*!/*/}
//                   {/*    /!*        <Dropdown.Item variant={"shadow"} key={""}>*!/*/}
//                   {/*    /!*            <Text></Text>*!/*/}
//                   {/*    /!*        </Dropdown.Item>*!/*/}
//                   {/*    /!*    </Dropdown.Menu>*!/*/}
//                   {/*    /!*</Dropdown>*!/*/}
//                   {/*    /!*</div>*!/*/}
//                   {/*    /!*<div style={{marginInline:10}}>*!/*/}
//                   {/*    /!*<Dropdown triggerType={"dialog"}>*!/*/}
//                   {/*    /!*    <Dropdown.Button size={"sm"} color={"white"}>*!/*/}
//                   {/*    /!*        Frontend*!/*/}
//                   {/*    /!*    </Dropdown.Button>*!/*/}
//                   {/*    /!*    <Dropdown.Menu onAction={(key)=>{*!/*/}
//                   {/*    /!*        nav(`/projects/${key}`);*!/*/}
//                   {/*    /!*    }}>*!/*/}
//                   {/*    /!*        <Dropdown.Item variant={"shadow"} key={"ja-ui-react"}>*!/*/}
//                   {/*    /!*            <Text>React.js Navigation</Text>*!/*/}
//                   {/*    /!*        </Dropdown.Item>*!/*/}
//                   {/*    /!*    </Dropdown.Menu>*!/*/}
//                   {/*    /!*</Dropdown>*!/*/}
//                   {/*    /!*</div>*!/*/}
//                   {/*    */}
//                   {/*</div>*/}
//               </Navigation>
//             </div>
//             <div
//                 style={{
//                     width: "auto",
//                     height: "100%",
//                       position: 'relative',
//                     // height: "100vh",
//                     alignItems: 'center',
//                     overflow: "scroll",
//                     display: 'flex',
//                     justifyContent:"center",
//                     background: 'transparent',
//                 }}>
//                 {/*{r.map((repo, index)=>{*/}
//                 {/*    return (*/}
//                 {/*        <MotionText key={index} color={"rgb(5,5,5)"} textItems={[{type: "p", text: `${repo.name}`}]} visible={true} bounce={0.4} custom={0.054} duration={1}/>*/}
//                 {/*    )*/}
//                 {/*    }*/}
//                 {/*)}*/}
// <Routes>
// <Route path={"/"} element={<Landing/>}/>
// <Route path={"/about"} element={<AboutPage/>}/>
// <Route path={"/contact"} element={<div>
// <motion.div
// style={{position: 'relative', left: 0, width: "auto", maxWidth: 300}}>
// <MotionText color={"rgb(0,0,0)"} textItems={[{type: "h2", text: "Contact"}, {type: "h4", text: "Enter your details to send me an email"}]} visible={true} bounce={0.4} custom={0.09} duration={2}/>
// </motion.div>
// <Contact/>
// </div>}/>
// <Route path={"/projects/ja-ui-react"} element={<iframe  src={"https://github.com/jeremy0anderson/j-ui/tree/main/jda-ui"}>NPM</iframe>}/>
// </Routes>
//
//             </div>
//         </div>
//     )
// }
export default App;
