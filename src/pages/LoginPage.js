import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";

function LoginPage({setAuthenticationHandler}) {
    const [isLoggedIn, toggleLogin] = React.useState(false);

    const history = useHistory();

    function handleClick() {
        toggleLogin(!isLoggedIn);
        setAuthenticationHandler(isLoggedIn);
        if (isLoggedIn === true) {
            history.push("/blogposts")
        } else {
            return <Redirect to={"/login"}/>;
        }
    }

    return (
        <>
            <h2>Login</h2>
            <button type="button" onClick={handleClick}>
                Inloggen
            </button>
        </>
    )
}

export default LoginPage;