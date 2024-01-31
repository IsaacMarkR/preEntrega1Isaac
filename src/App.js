import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { BackgroundSlider } from './components/BackgroundSlider';

import backgroundImage1 from './assets/futuristic1.jpg';
import backgroundImage2 from './assets/futuristic2.jpg';
import backgroundImage3 from './assets/futuristic3.webp';

const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];

function App() {
  return (
    <div>
      <BackgroundSlider images={backgrounds} duration={5} transition={2} />
      <Navbar />
      <Home />
      <Products />
    </div>
  );
}

export default App;