import React from "react";
import {Dropdown, Navbar as Nav, Text} from "@nextui-org/react";
import {motion} from 'framer-motion';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            open: false
        }
    }
    componentDidMount() {}
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.props!==nextProps || this.state!==nextState || this.context!==nextContext;}
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {}

    toggle(){
        this.setState({
            ...this.state,
            open: !this.state.open
        })
    }
    render(){
        return(
            <div style={{minWidth: 390}}>
            <Nav variant={"floating"} containerCss={{minWidth:390}}>
                <Nav.Brand>
                    <Text b color={"primary"} >
                        Jeremy Anderson
                    </Text>
                </Nav.Brand>

            </Nav>
            </div>
        )
    }
}
export default Navbar;