import React from 'react';

export default function Array_With_object() {
    const fruits = [
        { 
            name: "Apple", 
            id: 1, 
            disp: "Fresh and juicy apples, perfect for snacking or baking pies.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZWpvAXQcF38t9_zmyRNX41G9SV8bePkcrw&s", 
            quantity: "2 kg", 
            price: "750" 
        },
        { 
            name: "Banana", 
            id: 2, 
            disp: "Sweet and creamy bananas, great for smoothies or a quick energy boost.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIHzgenUQqGPtMT80lsLH2A7ACVHhIaxMQ&s", 
            quantity: "1.5 kg", 
            price: "450" 
        },
        { 
            name: "Mango", 
            id: 3, 
            disp: "Seasonal king of fruits, rich in flavor and perfect for summer desserts.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bw_hprsz0yJuLMzcQnRiCB8WYS6svIY1GA&s", 
            quantity: "1 kg", 
            price: "1200" 
        },
        { 
            name: "Orange", 
            id: 4, 
            disp: "Citrusy and tangy oranges, packed with vitamin C and perfect for juices.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPG8xVeOg8RmkVZsli6Fhl5UErmBMA8cBtQ&s", 
            quantity: "2.5 kg", 
            price: "600" 
        },
        { 
            name: "Grapes", 
            id: 5, 
            disp: "Sweet and crunchy grapes, ideal for snacking or adding to fruit salads.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGolbnUb8gkJzdj877wDKnoVnafXmXVG8AQ&s", 
            quantity: "1 kg", 
            price: "800" 
        },
         { 
            name: "Pear", 
            id: 6, 
            disp: "Pears are a fruit that come in many varieties, including Asian, European, and Callery.", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDM_C5ByjkSYpvHNw4HHX90Bb5CLPnTwVlA&s", 
            quantity: "2 kg", 
            price: "750" 
        }
    ];

    return (
        <div className="container">
            <div className="row mb-4">
                <h2 className="fruits-heading">Fruits</h2>
            </div>
            <div className="row">
                {fruits.map((fruit) => (
                    <div className="col-md-4 my-3" key={fruit.id}>
                        <div className="card d-flex flex-column shadow-sm border-light h-100">
                            <img src={fruit.img} className="card-img-top" alt={fruit.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{fruit.name}</h5>
                                <p className="card-text">{fruit.disp}</p>
                                <p className="card-text"><strong>Price:</strong> ${fruit.price}</p>
                                <p className="card-text"><strong>Quantity:</strong> {fruit.quantity}</p>
                                <a href="#" className="btn btn-primary mt-auto">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
