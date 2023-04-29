import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur similique eum cupiditate nam adipisci.</p>
            <p>Go Back To <Link to= '/register'>Register</Link></p>
        </div>
    );
};

export default Terms;