import React from "react";

const Event = (props) => {
    return(
        <td className={'Event ' + props.color}>
            <img src={props.image} alt={props.alt}/>
            <h5>{props.title}</h5>
            <h6>{props.rate}</h6>
            <h6>{props.description}</h6>
            <a href={props.link}>
                <button>Visit site</button>
            </a>
        </td>
    )
}

export default Event;