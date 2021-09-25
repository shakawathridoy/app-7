import React, { useState } from 'react';

const Developer = (props) => {
    const { name, partner, age, img} = props?.developer;

    const [partners, setPartner] =  useState("");
    const showPartner=(show) => {
        setPartner(show);
    }
    return (
        <div className="col-md-4 border">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
            <h4>Partner: {partners}</h4>
            <button onClick={() => showPartner(partner)}>Show Partner</button>
            <button onClick={props.handleIncrease}>Count</button>
        </div>
    );
};

export default Developer;