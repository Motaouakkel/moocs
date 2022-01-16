import react from "react";
import { Component } from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <header className="header">
                <img src={require('../images/logo.png')} className="logo"></img>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact>Accueil</NavLink></li>  
                        <li><NavLink to="/Cours" >Cours</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;