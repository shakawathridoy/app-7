import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Main = () => {

    const [developers, setDevolopers] = useState([]);

    const [count, setCount] = useState(0);


    const handleIncrease = () => {
        const newCount = count +1;
        setCount(newCount);
    }

    useEffect(() => {

        fetch("/devsData.json")
        .then(res => res.json())
        .then(data => setDevolopers(data));

    } , [])

    return (
        <section className="container">
            <h1 className="text-center">Players</h1>
            <div className="row">

                <div className="col-md-8"> 
                <div className="row border">
                {
                    developers.map(developer => 
                        <Developer 
                        key={Developer.id}
                        handleIncrease={handleIncrease}
                        developer={developer} ></Developer>
                    )
                }
                </div>
                </div>
            <div className="col-md-4">
                <Cart count={count}></Cart>
            </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Main;