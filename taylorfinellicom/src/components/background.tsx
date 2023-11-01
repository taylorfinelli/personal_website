import React from 'react';
import '../App.css';
import './background.gif'

export default function Background(props: any) {
    return (
        <div className="background-container">
            {props.children}
        </div>
    );
}
