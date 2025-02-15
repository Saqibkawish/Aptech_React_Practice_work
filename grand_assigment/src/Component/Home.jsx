import React from 'react';

export default function Home() {
  return (
    <div 
      className='flex items-center justify-center h-screen w-full text-white bg-cover bg-center' 
      style={{ 
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <div className='text-center p-5 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-yellow-400'>React Grand Assignment</h1>
      </div>
    </div>
  );
}
