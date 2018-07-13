import React from "react";
import Header from "./Header";

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Header>{props.children}</Header>
            <div className="navbar-nav ml-auto">
                <p>SCORE: {props.score}</p>
                <p>HIGH SCORE: {props.high}</p>
            </div>
        </nav>
    
    )
}

export default Nav;