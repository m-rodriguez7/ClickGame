import React from "react";

const Image = props => {
    // need props for src?
    // also need a tag for each
    // the tag is what will be used to track which image has been "clicked"
    return(
        <img alt="not loading" src={props.src} tag={props.tag}onClick={props.onClick}></img>
    );
};

export default Image;