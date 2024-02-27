import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => (
  <section style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    padding: '50px 20px',
    background: 'linear-gradient(135deg, #009688 0%, #00A375 100%)',
    color: 'white',
  }}>
    <div style={{
      padding: '0 20px',
    }}>
      <h1 style={{ margin: '0 0 20px 0', fontWeight: 'bold', fontSize: '44px'}}>Oddball</h1>
      <p style={{ margin: '0 0 20px 0', fontSize: '16px', width: '70%'}}>Explore in-depth NBA stats and game odds all in one place. Dive into the analytics of your favorite teams and players without the betting hassle.</p>
      <button style={{
        backgroundColor: '#FC9F5B',
        width: '170px',
        height: '50px',
        color: 'black',
        fontWeight: '500',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        border: 'none',
        fontSize: '16px',
        boxShadow: '1px 2px 2px 0px rgba(0, 0, 0, 0.3)'
      }}>Unlock the Game</button>
    </div>
    <div style={{
      display: 'grid',
      placeItems: 'center',
    }}>
      <Spline scene="https://prod.spline.design/AwkSPFcs7Wy56ft8/scene.splinecode" style={{ width: '100%', height: '300px', maxWidth: '500px' }}/>
    </div>
  </section>
);

export default HeroSection;