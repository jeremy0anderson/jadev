import React from "react";
import {Route, Routes} from "react-router-dom";
import Components from './Components';
import {Projects} from "./Components/Pages/Projects/Projects";
import {Components as C} from 'jda-ui';
const {Navigation} = C;
const {Home, About, Contact, Container, Div} = Components;

function App(props){
    return(
        <Container>
              <Navigation anchor={"left"} items={["Home", "About", "Contact"]}  menuBackground={'rgb(40,40,40)'} background={"linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)"}/>
            <Div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "calc(100% - 60px)",
                    y:60,
                    overflow: "scroll",
                    // background: 'rgb(245, 245, 245)',
                }}>
                    <Routes>
                        <Route path={"/"} element={<><Home/><About/><Contact/></>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/work"} element={<Projects/>}/>
                    </Routes>

            </Div>
        </Container>
    )
}
export default App;
