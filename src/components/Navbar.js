import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';



export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link to="/">
            <img src={logo} alt="store" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>

                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">

                    
                    <i className="fas fa-cart-plus"/>
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
            </nav>
        );
    }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.5rem solid var(--lightBlue);
`;