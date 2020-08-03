import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';



const NotFound = () => {

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="image">
                    <img src={require("../images/astronaut.png")} alt="hey" />
                </div>
                <div className="text">
                    <h1>oops!</h1>
                    <h2>Looks like you tried to get to a place outside planet earth.
                </h2>
                    <h2> We haven't covered alien cultures
                    yet.
                </h2>
                    <a href="/">Back to Earth</a>

                </div>



            </div>
        </div>
    );
};

export default NotFound;
