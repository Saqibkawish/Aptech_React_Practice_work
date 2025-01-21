import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Array() {
    let React_topic = ["State", "Routing", "Component", "Map", "Props"];
    let random_No = [2, 3, 4, 7, 89, 56, 76, 87, 98, 24, 236, 47, 54, 23];

    let Odd_No = random_No.filter((u) => u % 2 === 1);
    let Even_No = random_No.filter((h) => h % 2 === 0);

    return (
        <div className="container mt-5">
            {/* React Topics Section */}
            <div className="mb-4">
                <h2 className="text-primary">React Topics</h2>
                <div className="list-group">
                    {React_topic.map((s, index) => (
                        <p key={index} className="list-group-item">{s}</p>
                    ))}
                </div>
            </div>

            {/* Odd Numbers Section */}
            <div className="mb-4">
                <h2 className="text-success">Odd Numbers</h2>
                <div className="list-group">
                    {Odd_No.map((o, index) => (
                        <p key={index} className="list-group-item">{o}</p>
                    ))}
                </div>
            </div>

            {/* Even Numbers Section */}
            <div>
                <h2 className="text-info">Even Numbers</h2>
                <div className="list-group">
                    {Even_No.map((e, index) => (
                        <p key={index} className="list-group-item">{e}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
