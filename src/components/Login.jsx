import React, { useEffect, useState } from "react";
import { getUsers } from "../ApiCalls";
import "./Login.css"

// Get users -> Check for input -> Check if username exists -> login
const Login = ({setUser}) => {
    const [users, setUsers] = useState([]);
    const [credentials, setCredentials] = useState({username: ""})
    const [tempUser, setTempUser] = useState({})
    
    const handleInput = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setCredentials({...credentials, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate();
    }
    
    //check if username exists
    const userExists = () => {
        const usernameField = document.getElementById("username")
        usernameField.setCustomValidity("The username does not exist.")
   
        users.forEach(u => {
            if(u.login === credentials.username){
                setTempUser(u)
                usernameField.setCustomValidity("")
            }
        })
    }

     //authenticate user
    const authenticate = () => {
        if(typeof tempUser.id !== "undefined"){
           setUser(tempUser);
        }
    }

    //Check for existing users on username value change
    useEffect(()=>{
        userExists();
    }, [credentials.username])

    //Get users from API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response);
        };
        fetchUsers();
    }, []);

    return(
        <form onSubmit={e=> handleSubmit(e)}>
            <h2>Logga in med ditt användarnamn</h2>
            <input id="username" type="text" name="username" onChange={e => handleInput(e)} value={credentials.username} placeholder="Ange ditt användarnamn" required/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;