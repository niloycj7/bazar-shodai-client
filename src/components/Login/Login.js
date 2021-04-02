import React, { useContext, useState }  from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from '../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const [user, setUser] = useContext(UserContext)

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                let newUser = {...user}
                newUser = {
                    name: displayName,
                    email: email,
                    error: null
                }
                setUser(newUser)
                history.replace(from);

            })

            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }

    return (
        <div>
            <FontAwesomeIcon onClick={handleSignIn} icon={faGoogle} />
        </div>
    );
};

export default Login;