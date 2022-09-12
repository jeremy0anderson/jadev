// noinspection GraphQLUnresolvedReference

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ApolloConsumer, gql, useQuery} from '@apollo/client';
import {motion} from 'framer-motion';
import {Button, Input} from "@nextui-org/react";

function GetUser(){
   const nav = useNavigate();
   const [edit, setEdit] = useState(false)
   //eslint-ignore-next-line
   const {error, loading, data} = useQuery(gql`
       query Query {
           verifyUser {
               _id
               firstName
               lastName
               email
           }
       }
   `);
   if (error) return <p>{error.message}</p>
   if (loading) return <motion.div>Loading...</motion.div>
   const {verifyUser} = data;
   return (
      <motion.form style={{position: 'absolute', top: 80}}>
         <Input
            label={"First Name"}
            disabled={!edit}
            value={verifyUser.firstName===null?"":verifyUser.firstName}/>
         <Input
            label={"Last Name"}
            disabled={!edit}
            value={verifyUser.lastName===null?"":verifyUser.lastName}/>
         <Input
            label={"Email"}
            disabled={!edit}
            value={verifyUser.email || ""}/>
         <Button.Group>
            <Button
               onPress={()=>setEdit(!edit)}
            >{edit?"Cancel":"Edit"}</Button>
            <Button
               disabled={!edit}
               type={"submit"}>Save</Button>
         </Button.Group>
      </motion.form>
   )
}





class User extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
        
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
   
        return (
         <GetUser/>
        );
    }
}

User.propTypes = {};

export default User;
