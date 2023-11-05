import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './App.css';

import Slideshow from './Slideshow';

const App = () => {
  const domain = 'poth.com';
  let images = [

    'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    // Add your image URLs here for each type of slideshow
  ];

  return (
    <div className="app-container">
      <div className="slideshow-container">
        <Slideshow type="slide" images={images}/>
        <Slideshow type="fade" images={images}/>
        <Slideshow type="zoom" images={images}/>
      </div>
    </div>
  );
};

export default App;
