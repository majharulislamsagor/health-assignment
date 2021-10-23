import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Navigation.css';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container container-fluid">
                    <Link class="navbar-brand text-white" to='/home'>MediCare</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className=" hov text-white nav-link active" to='/home'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className=" hov text-white nav-link" to='/services'>Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link className=" hov text-white nav-link" to='/about'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link className=" hov text-white nav-link" to='/contact'>Contact US</Link>
                            </li>
                            <li class="nav-item">
                                <Link className=" hov text-white nav-link" to='/register'>Regester</Link>
                            </li>
                            <p className=" hov text-danger nav-link" >{user.displayName}</p>


                            <li className="nav-item">
                                {
                                    user.email ?
                                        <Link className="  text-white nav-link" onClick={logOut} to='/login'>LogOut</Link>

                                        :
                                        <Link className=" hov text-white nav-link" to='/login'>Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default NavigationBar;