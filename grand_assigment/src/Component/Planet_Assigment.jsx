import React, { useState } from 'react';
import './Planet_Assigment.css'
export default function Planet_Assigmnent() {
  let [searchTerm, setSearchTerm] = useState('');
  // Array of planet data
let planets = [
  {
    name: "Mercury",
    size: "4,880 km (diameter)",
    distanceFromSun: "57.91 million km",
    notableFeature: "Smallest planet and closest to the Sun",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVyY3VyeSUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D", // Add real image URL here
  },
  {
    name: "Venus",
    size: "12,104 km (diameter)",
    distanceFromSun: "108.2 million km",
    notableFeature: "Hottest planet due to thick atmosphere",
    image: "https://media.istockphoto.com/id/1295829494/photo/venus-elongation-4k-footage.webp?a=1&b=1&s=612x612&w=0&k=20&c=77RjdkqHXkE1rfGPWNcHmsM8QMrBPBTOImgX_vlavpY=", // Add real image URL here
  },
  {
    name: "Earth",
    size: "12,742 km (diameter)",
    distanceFromSun: "149.6 million km",
    notableFeature: "Supports life and has abundant water",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFydGglMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D", // Add real image URL here
  },
  {
    name: "Mars",
    size: "6,779 km (diameter)",
    distanceFromSun: "227.9 million km",
    notableFeature: "Known as the Red Planet with evidence of ancient water",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFycyUyMCUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D", // Add real image URL here
  },
  {
    name: "Jupiter",
    size: "139,820 km (diameter)",
    distanceFromSun: "778.5 million km",
    notableFeature: "Largest planet with a giant red storm",
    image: "https://media.istockphoto.com/id/1482783826/photo/artist-view-of-the-jupiter-planet.webp?a=1&b=1&s=612x612&w=0&k=20&c=YoQfq7IXDELnjGrnkdhYDZ4K9GGnVVbkDtT1F9n9xOg=", // Add real image URL here
  },
  {
    name: "Saturn",
    size: "116,460 km (diameter)",
    distanceFromSun: "1.434 billion km",
    notableFeature: "Famous for its stunning ring system",
    image: "https://images.unsplash.com/photo-1633998860530-d5ebf1e2018e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNhdHVybiUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D", // Add real image URL here
  },
  {
    name: "Uranus",
    size: "50,724 km (diameter)",
    distanceFromSun: "2.871 billion km",
    notableFeature: "Rotates on its side with a faint ring system",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFVyYW51cyUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D", // Add real image URL here
  },
  {
    name: "Neptune",
    size: "49,244 km (diameter)",
    distanceFromSun: "4.495 billion km",
    notableFeature: "Strongest winds in the Solar System",
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5lcHR1bmUlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D", // Add real image URL here
  }
];

  // Handle the search input
  let handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter planets based on the search term
  let filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Planets in our Solar System</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search planets..."
        value={searchTerm}
        onChange={handleSearch}
      />
       <div className="row">
      <div className="planet-cards">
       
        {filteredPlanets.map((planet) => (
          <div className='col-md-3'>
          <div key={planet.name} className="planet-card">
            <img src={planet.image} alt={planet.name} className="planet-image" />
            <h3>{planet.name}</h3>
            <p><strong>Size:</strong> {planet.size}</p>
            <p><strong>Distance from Sun:</strong> {planet.distanceFromSun}</p>
            <p><strong>Notable Feature:</strong> {planet.notableFeature}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
