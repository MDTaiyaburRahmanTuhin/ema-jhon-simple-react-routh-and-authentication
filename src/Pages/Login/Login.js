import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singnInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singnInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;