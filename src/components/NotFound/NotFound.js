import React from 'react';
import notFound from '../../images/page-not-found.png'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} alt="" />
            <h2>Oops Page Not Found</h2>
        </div>
    );
};

export default NotFound;