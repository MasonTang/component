import React from 'react';

export default function Contact(props){
    
    return (
        <div className="contact">
            <ul>
                <li><img src={props.photo} alt="cool" /></li> 
                <li>{props.name}</li> 
                <li>{props.address}</li> 
            </ul>
        </div>
    )
}