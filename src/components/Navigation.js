import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function Navigation() {
    const [isAuth, setIsAuth] = React.useState(false);

    let linkText = "Inloggen";

    if (isAuth) {
        linkText = "Uitloggen"
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>
                            Home
                        </li>
                    </NavLink>

                    <NavLink to="/login" exact activeClassName="active-link">
                        <li>
                            {linkText}
                        </li>
                    </NavLink>

                    {isAuth &&
                    <NavLink to="/blogposts" exact activeClassName="active-link">
                        <li>
                            Blog Overzicht
                        </li>
                    </NavLink>
                    }

                    {isAuth &&
                    <NavLink to="/blog/:id" exact activeClassName="active-link">
                        <li>
                            Blog Posts
                        </li>
                    </NavLink>
                    }

                    {/*{!isAuth &&*/}
                    {/*<NavLink to="/inloggen" exact activeClassName="active-link">*/}
                    {/*    <li>*/}
                    {/*        Uitloggen*/}
                    {/*    </li>*/}
                    {/*</NavLink>*/}
                    {/*}*/}


                </ul>
            </div>
        </nav>
    )
}

export default Navigation