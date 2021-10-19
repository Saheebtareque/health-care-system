import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log(location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const googleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2>Please Follow The Instructions below to continue:</h2>
            <button className="btn-success px-3 py-2 rounded-pill" onClick={googleLogin}>Google Sign In</button>
            <br />
        </div>
    );
};

export default Login;