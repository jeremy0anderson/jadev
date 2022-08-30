import React, {Component} from 'react';
import {Spacer, Text, Container as NContainer} from '@nextui-org/react';
import {Card, Button, Box, TextField, Container} from '@mui/material';
import {init, send} from '@emailjs/browser';
import {TailSpin} from "react-loader-spinner";
import {motion} from 'framer-motion';
import {Components} from 'ja-ui-react';
import {default as MotionText} from '../../Motion/Text';
import * as M from "@mui/material";
import skillsArr, {Skills} from "../About/Skills";

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
            <M.Box
                style={{zIndex:1000, display: 'flex', width: "100%", flexDirection:'column', overflow:'visible', alignItems:'center', alignContent:'center', height: "calc(100% - 60px)", position: 'relative'}}>

                <M.Container
                    maxWidth={"md"}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        alignContent: "center"}}>
                    <Card
                        elevation={5}
                        style={{
                            maxWidth: 1000,
                            minWidth: 350,
                            position: "relative",
                            overflow: "visible",
                            padding: 20,
                            display: 'flex',
                            // gridTemplate: "auto auto / auto",
                            justifyContent:'center',
                            alignItems: 'center',
                            width: "100%",
                            margin:5}}>
                        <Box
                            style={{width: '100%'}}
                            id={"Contact-form"}
                            onSubmit={this.handleSubmit}
                            component={"form"}>
                            <Box
                                sx={{
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                        md: "row",
                                        lg: "row",
                                        xl: "row"
                                    }
                                }}
                                style={{
                                    width: "100%",
                                    display:'flex',
                                    justifyContent: "center",
                                }}>
                                <Spacer x={1} y={0}/>
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
                                <Spacer x={1} y={0.5}/>
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
                                <Spacer x={1} y={0.5}/>
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
                                <Spacer x={1} y={0}/>
                            </Box>
                            <Spacer x={0} y={1}/>
                            <Box
                                sx={{display:'flex', justifyContent: "center", width: "100%",flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row"
                                }}}>
                                <Spacer x={1} y={0}/>
                                <TextField
                                    onChange={this.handleMessageChange}
                                    required={true}
                                    onBlur={this.handleMessageBlur}
                                    sx={{marginInline: .5, fontFamily: "sans-serif", width: "100%"}}
                                    multiline={true}
                                    minRows={3}
                                    value={this.state.message}
                                    label={"Message"}
                                    helperText={this.state.messageError?"Subject required":" "}
                                    error={this.state.messageError}
                                    color={"secondary"}/>
                                <Spacer x={1} y={0}/>
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
                </M.Container>
            </M.Box>
        );
    }
}


export default Contact;