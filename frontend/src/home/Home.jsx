import React from 'react';
import Navbar from '../components/Navbar';
import Bannar from '../components/Bannar';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
    <Navbar />
      <Bannar />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
