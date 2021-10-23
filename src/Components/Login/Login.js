import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const Login = () => {
    const { user, singInUsingGoogle, handleResetPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleGoogleLogIn = () => {

        singInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home');
            })

    }
    return (
        <div className="mb-5">

            <div className=" p-4 mt-5 mb-5 container w-50 mx-auto border border-5 border-primary ">
                <h1> Log In </h1>

                <form className="mb-4" onSubmit="">
                    <input className="mt-5 mb-3" type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Password" />
                    <br />
                    <input className="mt-4" type="submit" value="Sing In " />
                    <br />
                    <Link to="/register"> New User?</Link>
                </form>
                <button onClick={handleGoogleLogIn} >Google Sing In</button>



            </div>
            <br /><br /><br /><br />






        </div>
    );
};

export default Login;