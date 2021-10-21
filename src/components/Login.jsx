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
    
    

     //Check if user id is available and then set is as active user
    const authenticate = () => {
        if(typeof tempUser.id !== "undefined"){
           setUser(tempUser);
        }
    }

    //Run username check on username input change
    useEffect(()=>{
        //check if username exists, if yes: set user as tempUser state
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
        userExists();
        console.log("CHECK")
    }, [credentials.username, users])

    //Get users from API and set the Users state
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response);
        };
        fetchUsers();
    }, []);

    return(
        <form onSubmit={e=> handleSubmit(e)}>
            <h1>Logga in med ditt användarnamn</h1>
            <input id="username" type="text" name="username" onChange={e => handleInput(e)} value={credentials.username} placeholder="Ange ditt användarnamn" required/>
            <button type="submit">Logga in</button>
        </form>
    )
}

export default Login;