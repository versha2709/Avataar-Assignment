// App.js
import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import './styles/index.scss';
import './styles/variable.scss';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
      <div className="header">
        <h1 className="title">Featured Products</h1>
        <h2 className="subtitle">Explore and discover a variety of products</h2>
      </div>
    </div>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
