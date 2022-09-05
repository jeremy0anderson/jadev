import React, {Component} from 'react';
import {Spacer,Button, Text, Container as NContainer, Input, Textarea} from '@nextui-org/react';
import {Card, Box, TextField, Container} from '@mui/material';
import {init, send} from '@emailjs/browser';
import {TailSpin} from "react-loader-spinner";
import {motion} from 'framer-motion';
import {Components} from 'ja-ui-react';
import {default as MotionText} from '../../Motion/Text';
import * as M from "@mui/material";
import * as I from "@mui/icons-material";
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
            <motion.div
                style={{zIndex:1000, display: 'flex', width: "auto", flexDirection:'column', overflow:'visible', alignItems:'center', alignContent:'center', height: "calc(100% - 60px)", position: 'relative'}}>

                <motion.div
                    style={{
                        maxWidth: 800,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        alignContent: "center"}}>
                    <motion.div
                        style={{
                            maxWidth: 800,
                            width: "100%",
                            position: "relative",
                            overflow: "visible",
                            padding: 20,
                            display: 'flex',
                            // gridTemplate: "auto auto / auto",
                            justifyContent:'center',
                            alignItems: 'center',
                            margin:5}}>
                        <motion.form
                            style={{width: '100%', display: 'flex', flexDirection: "column"}}
                            id={"Contact-form"}
                            onSubmit={this.handleSubmit}
                            component={"form"}>
                            <motion.div
                                  id={"contact-fields"}
                                  style={{
                                        width: "auto",
                                        display:'flex',
                                        justifyContent: "center",
                                }}>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                    className={"contact-input"}
                                    bordered
                                    label={"Name"}
                                    color={this.state.nameError?"error":"primary"}
                                    onChange={this.handleNameChange}
                                    helperText={this.state.nameError?"Name required":" "}
                                    onBlur={this.handleNameBlur}
                                    required={true}
                                    value={this.state.name}
                                    helperColor={"error"}
                                    contentLeft={<I.Person/>}/>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                    className={"contact-input"}
                                    bordered
                                    type={"email"}
                                    required={true}
                                    onBlur={this.handleEmailBlur}
                                    color={this.state.emailError?"error":"primary"}
                                    onChange={this.handleEmailChange}
                                    helperText={this.state.emailError?"Enter a valid email":" "}
                                    value={this.state.email}
                                    helperColor={"error"}
                                    label={"Email"}
                                    contentClickable={true}
                                    enterKeyHint={"next"}
                                    contentLeft={<I.Email/>}/>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                      className={"contact-input"}
                                      bordered
                                      required={true}
                                      onBlur={this.handleSubjectBlur}
                                      color={this.state.subjectError?"error":"primary"}
                                      onChange={this.handleSubjectChange}
                                      label={"Subject"}
                                      value={this.state.subject}
                                      helperText={this.state.subjectError?"Subject required":" "}
                                      contentLeft={<I.Subject/>}
                                      helperColor={"error"}/>
                                <Spacer x={1} y={0}/>
                            </motion.div>
                            <Spacer x={0} y={1}/>
                            <motion.div
                                style={{display:'flex', justifyContent: "center", width: "100%"}}>
                                <Spacer className={"textarea-spacer"} x={1} y={0}/>
                                <div style={{display: 'flex', flexDirection: "column",width: "100%"}}>
                                
                                <Textarea
                                    bordered
                                    onChange={this.handleMessageChange}
                                    required={true}
                                    onBlur={this.handleMessageBlur}
                                    style={{fontFamily: "sans-serif", width: "100%"}}
                                    minRows={3}
                                    value={this.state.message}
                                    label={"Message"}
                                    helperText={this.state.messageError?"Subject required":" "}
                                    helperColor={"error"}
                                    color={this.state.messageError?"error":"primary"}/>
                                </div>
                                <Spacer className={"textarea-spacer"} x={1} y={0}/>
                            </motion.div>
                            <Text css={{color: "green", margin: 5}}>{this.state.resMessage}</Text>
                            <Spacer x={0} y={.5}/>
                            <motion.div
                                style={{
                                    display:'flex',
                                    justifyContent: "center",
                                    width: "100%",
                                }}>
                                <Spacer className={"textarea-spacer"} x={1} y={1}/>
                                <Button
                                    disabled={this.state.emailError || this.state.nameError || this.state.messageError || this.state.subjectError}
                                    style={{width: "100%"}} type={"submit"}>
                                    {this.state.loading? <TailSpin color="#00BFFF" height={30} width={30} visible={this.state?.loading}/>: "Send"}
                                </Button>
                                <Spacer className={"textarea-spacer"} x={1} y={1}/>
                                
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }
}


export default Contact;