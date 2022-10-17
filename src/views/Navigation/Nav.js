import React from "react";
import "./Nav.scss"
import {
    //Link, 
    NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                {/* <Link to="/home">Home</Link>
                <Link to="/Todo">Todo's</Link>
                <Link to="/inputData">Input</Link> */}

                {/* <NavLink className="active" to="/home">Home</NavLink>
                <NavLink to="/Todo">Todo's</NavLink>
                <NavLink to="/inputData">Input</NavLink> */}

                <NavLink to="/home" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/Todo" activeClassName="active">
                    Todo's
                </NavLink>
                <NavLink to="/inputData" activeClassName="active">
                    Input
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                {/* <NavLink to="/detailUser" activeClassName="active">
                    Detail Users
                </NavLink> */}

            </div>
        )
    }

}
export default Nav;