import React, {Component} from 'react';
import {Spacer, Text, Container as NContainer} from '@nextui-org/react';
import {Card, Button, Box, TextField, Container} from '@mui/material';
import {init, send} from '@emailjs/browser';
import {TailSpin} from "react-loader-spinner";
import AnimatedText from "../../Motion/AnimatedTxt";
import {motion} from 'framer-motion';

init(process.env.REACT_APP_PUBLIC_KEY);

class Contact extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: "",
            email:"",
            subject:"",
            message:"",
            resMessage:'',
            emailError:false,
            nameError:false,
            messageError:false,
            subjectError:false,
            replay:true
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameBlur = this.handleNameBlur.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handleSubjectBlur = this.handleSubjectBlur.bind(this);
        this.handleMessageBlur = this.handleMessageBlur.bind(this);
    }

    //lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}

    //event handlers
    handleNameBlur(e){
        this.setState({
            ...this.state,
            nameError:!this.state.name.length
        })
    }
    handleEmailBlur(e){
        console.log(e.target.value);
        const rx = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/;
        if (rx.test(e.target.value)){
             return  this.setState({
                    ...this.state,
                    emailError: false
                })
            }
        if (rx.test(e.target.value) === false ){
         return this.setState({
                 ...this.state,
                 emailError: true
             })
         }
        if (rx.test(e.target.value) === false || e.target.value.length === 0){
            return this.setState({
                ...this.state,
                emailError: true,
                emailErrorMessage: ""
            })
        }
    }
    handleSubjectBlur(e){
        this.setState({
            ...this.state,
            subjectError:!e.target.value.length
        })
    }
    handleMessageBlur(e){
        this.setState({
            ...this.state,
            messageError:!e.target.value.length
        })
    }
    handleNameChange(e){
        this.setState({
            ...this.state,
            name:e.target.value,
            nameError:false
        })
    }
    handleEmailChange(e){
        this.setState({
            ...this.state,
            email:e.target.value,
            emailError:false
        })
    }
    handleSubjectChange(e){
        this.setState({
            ...this.state,
            subject:e.target.value,
            subjectError:false
        })
    }
    handleMessageChange(e){
        this.setState({
            ...this.state,
            message:e.target.value,
            messageError: false
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            loading: true,
        })
        send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            ...this.name,
            ...this.email,
            ...this.subject,
            ...this.message
        }, process.env.REACT_APP_PUBLIC_KEY).then((res)=>{
            if (res.status === 200 && res.text === "OK"){
                this.setState({
                    ...this.state,
                    loading: false,
                    resMessage: "Message Sent!"
                });
                setTimeout(()=>{
                    this.setState({
                        ...this.state,
                        name: "",
                        email:"",
                        subject:"",
                        message:"",
                        resMessage: ""
                    });
                },1500);
            }
        })
    }


    //render
    render() {
        const container = {
            hidden: {
                opacity:0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.035
                }
            }
        };
        return (
            // <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", height: "80%", width: "100%", p:0, left: 0}}>
              <Container
                    maxWidth={"md"}
                    style={{display: 'flex', justifyContent: 'center', alignItems: "center", position: 'relative', top: 200}}>
      
      
              <Card
                      elevation={8}
                      style={{

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                          width: "85%",
                    // width:{
                    //     xs: "80%",
                    //     sm: "80%",
                    //     md: "70%",
                    //     lg: "60%",
                    //     xl: "50%"
                    // },
                          margin:10,
                    zIndex: 1010,
                    padding: 15,
                    flexDirection:"column",
                    overflow: "visible"}}>
                    <motion.div
                          initial="hidden"
                          // animate="visible"
                          animate={this.state.replay ? "visible" : "hidden"}
                          variants={container}
                          style={{y:-100,position: 'relative', background: "linear-gradient(45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)", borderRadius:10,  padding: "10px", width: "100%", display: 'flex', boxShadow:"2px 2px 8px" }}>
                        <AnimatedText visibleColor={"#fff"} hiddenColor={"#fff"}  {...{type:"heading1", text: "Contact me"}} speed={"slow"}/>
                    </motion.div>
                    <Box
                        id={"Contact-form"}
                        onSubmit={this.handleSubmit}
                        component={"form"}>
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent: "center",
                                flexDirection:{
                                    xs: "column",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row"
                                }
                            }}>
                            <TextField
                                variant={"outlined"}
                                required={true}
                                onBlur={this.handleNameBlur}
                                sx={{marginInline: .5}}
                                onChange={this.handleNameChange}
                                aria-label={"name field"}
                                type={"text"}
                                color={"secondary"}
                                helperText={this.state.nameError?"Name required":" "}
                                error={this.state.nameError}
                                value={this.state.name}
                                label={"Name"}/>
                            <Spacer x={0} y={0.5}/>
                            <TextField
                                variant={"outlined"}
                                type={"email"}
                                required={true}
                                onBlur={this.handleEmailBlur}
                                sx={{marginInline: .5}}
                                color={"secondary"}
                                onChange={this.handleEmailChange}
                                aria-label={"email field"}
                                error={this.state.emailError}
                                helperText={this.state.emailError?"Email required":" "}
                                value={this.state.email}
                                label={"Email"}/>
                            <Spacer x={0} y={0.5}/>
                            <TextField
                                variant={"outlined"}
                                required={true}
                                onBlur={this.handleSubjectBlur}
                                sx={{marginInline: .5}}
                                color={"secondary"}
                                onChange={this.handleSubjectChange}
                                aria-label={"subject-field"}
                                label={"Subject"}
                                value={this.state.subject}
                                helperText={this.state.subjectError?"Subject required":" "}
                                error={this.state.subjectError}
                                />
                        </Box>
                        <Spacer x={0} y={1}/>
                        <Box
                            sx={{display:'flex', justifyContent: "center", width: "100%", flexDirection: "column"}}>
                            <TextField
                                onChange={this.handleMessageChange}
                                required={true}
                                onBlur={this.handleMessageBlur}
                                sx={{marginInline: .5, fontFamily: "sans-serif"}}
                                multiline={true}
                                minRows={3}
                                value={this.state.message}
                                label={"Message"}
                                helperText={this.state.messageError?"Subject required":" "}
                                error={this.state.messageError}
                                color={"secondary"}/>
                        </Box>
                        <Text css={{color: "green", margin: 5}}>{this.state.resMessage}</Text>
                        <Spacer x={0} y={.5}/>
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent: "center",
                                width: "100%",
                            }}>
                            <Button
                                disabled={this.state.emailError || this.state.nameError || this.state.messageError || this.state.subjectError}
                                sx={{width: "98%", marginInline:.5}} variant={"contained"} type={"submit"}>
                                {this.state.loading? <TailSpin color="#00BFFF" height={30} width={30} visible={this.state?.loading}/>: "Send"}
                            </Button>
                        </Box>
                    </Box>
                </Card>
            {/*// </Box>*/}
            </Container>
        );
    }
}


export default Contact;