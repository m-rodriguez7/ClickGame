import React from "react";

const Jumbo = props => {
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.children}</h1>
                <p className="lead">{props.info}</p>
            </div>
        </div>
    );
}

export default Jumbo;