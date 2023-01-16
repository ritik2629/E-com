import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

export const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="not-found">
            <h2>Error 404</h2>
            <p>Page Not Found</p>
            <div className='btn'>
                <button onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </div>
    )
}