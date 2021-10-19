import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Follow The Instructions below to continue:</h2>
            <button className="btn-success px-3 py-2 rounded-pill" onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
        </div>
    );
};

export default Login;