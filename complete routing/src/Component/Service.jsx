import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Service() {
    let locate = useLocation();
    let msg = locate.state?.a;
    let user_name = locate.state?.b;

    let Service_array = [
        { id: 1, name: 'Sumsung Galaxy S25 Ultra', description: 'Description of Service 1', img: "https://i.ytimg.com/vi/Aqsk0SCa0lo/sddefault.jpg" },
        { id: 2, name: 'Sumsung Galaxy S24 Ultra', description: 'Description of Service 2', img: "https://i.ytimg.com/vi/GHZwRPskGc4/maxresdefault.jpg" },
        { id: 3, name: 'Sumsung Galaxy S23 Ultra', description: 'Description of Service 3', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiImA-lpDKo-0qHKFsf-PwEXS42QwWHJ6NZQ&s" },
        { id: 4, name: 'Iphone 15 pro max', description: 'Description of Service 4', img: "https://i.ytimg.com/vi/CREM-mFuyyo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6WA-0L8c5lu2OMH5V2bxFi7WXQQ" },
        { id: 5, name: 'Iphone 14 pro max', description: 'Description of Service 5', img: "https://blog.techbazaar.pk/wp-content/uploads/2024/07/apple-iphone-14-copy-1.webp" },
        { id: 6, name: 'Iphone 13 pro max', description: 'Description of Service 6', img: "https://i.ytimg.com/vi/FJN5ZXhfB3I/sddefault.jpg" }
    ];

    return (
        <div className='container text-center mt-4'>
            <h3>Welcome, {user_name}</h3>
            <p>{msg}</p>
            <h3 className='mb-4'>Our Services</h3>
            <div className='row'>
                {Service_array.map(service => (
                    <div key={service.id} className='col-md-4 mb-4'>
                        <div className='card shadow-lg rounded'>
                            <img src={service.img} className='card-img-top img-fluid' alt={service.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className='card-body'>
                                <h5 className='card-title'>{service.name}</h5>
                                <p className='card-text'>{service.description}</p>
                                <Link className='btn btn-primary my-3' to="/desr">Product Desription</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
