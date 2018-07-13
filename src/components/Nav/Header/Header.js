import React from "react";

const Header = props => {
    return(
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand">{props.children}</a>
            </div>
        </div>
    );
}

export default Header;