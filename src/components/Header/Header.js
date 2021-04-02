import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../logo.png'
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from '../firebase.config';



const Header = () => {

    const [user, setUser] = useContext(UserContext)

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    name: null,
                    email: null,
                    error: null,
                }
                setUser(signedOutUser);
            })
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="success"
            variant="dark"
        >
            <Link to="/">
                <LinkContainer to="/">
                    <Navbar.Brand>Bazar Shodai</Navbar.Brand>
                </LinkContainer>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="ordinary-button">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                        <Nav.Link className="ordinary-button">Orders</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/admin">
                        <Nav.Link className="ordinary-button">Admin</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    
                    {
                        user.email? 
                        <LinkContainer to="/admin">
                        <Nav.Link className="ordinary-button">Logout</Nav.Link>
                    </LinkContainer> 
                    : 
                    <LinkContainer to="/admin">
                        <Nav.Link onClick={handleSignOut} className="ordinary-button">Login</Nav.Link>
                    </LinkContainer>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;