import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Regester = () => {
    const { user, singInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin } = useAuth();
    return (
        <div className="mb-5">

            <div className=" p-4 mt-5 mb-5 container w-50 mx-auto border border-5 border-primary ">
                <h1> Create A New Account </h1>

                <form className="mb-4" onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} className="mt-5 mb-3" type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter Password" />
                    <br />
                    <input className="mt-3" type="submit" value="Register" />
                    <br />

                </form>
                <Link to="/login"> Already Have An Account?</Link>
                <br />
                <br />
                <button onClick={singInUsingGoogle} >Regesiter With Google</button>


            </div>
            <br /><br /><br /><br />






        </div>
    );
};

export default Regester;