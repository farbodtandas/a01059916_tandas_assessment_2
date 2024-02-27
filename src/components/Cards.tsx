import React from 'react';
import Spline from '@splinetool/react-spline';

const PricingCards = () => (
  <section style={{
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '50px',
      width: '100%',
      maxWidth: '1400px',
    }}>
      <div style={{
        background: 'linear-gradient(145deg, #FC9F5B, #FFD194)',
        height: '600px',
        borderRadius: '15px',
        boxShadow: '2px 3px 2px 1px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        gap: '10px',
      }}>
        <Spline scene="https://prod.spline.design/ylsL08ps4IbVLtC5/scene.splinecode" style={{ height: '150px', width: '100%', maxWidth: '300px', }} />
        <p><b style={{ fontSize: '30px' }}>Seasonal Training</b></p>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Training that is scheduled before the NBA season begings for learning and discussing patterns for all NBA teams and players to evaluate odds.</p>
        <p><b style={{ fontSize: '30px' }}>$11.99</b>/mo</p>
        <button style={{
          backgroundColor: '#00A375',
          width: '100px',
          height: '40px',
          color: 'white',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '1px 2px 2px 0px rgba(0, 0, 0, 0.3)',
        }}>Enroll</button>
      </div>
      <div style={{
        background: 'linear-gradient(145deg, #FC9F5B, #FFD194)',
        height: '600px',
        borderRadius: '15px',
        boxShadow: '2px 3px 2px 1px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        gap: '10px',
      }}>
        <Spline scene="https://prod.spline.design/qalUdJDZZBx5psfZ/scene.splinecode" style={{ height: '150px', width: '100%', maxWidth: '300px', }} />
        <p><b style={{ fontSize: '30px' }}>Monthly Training</b></p>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Training that is scheduled once a month for learning and discussing patterns for all NBA teams and players to evaluate odds.</p>
        <p><b style={{ fontSize: '30px' }}>$23.99</b>/mo</p>
        <button style={{
          backgroundColor: '#00A375',
          width: '100px',
          height: '40px',
          color: 'white',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '1px 2px 2px 0px rgba(0, 0, 0, 0.3)',
        }}>Enroll</button>
      </div>
      <div style={{
        background: 'linear-gradient(145deg, #FC9F5B, #FFD194)',
        height: '600px',
        borderRadius: '15px',
        boxShadow: '2px 3px 2px 1px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        gap: '10px',
      }}>
        <Spline scene="https://prod.spline.design/46UpT1fJICyQl4e7/scene.splinecode" style={{ height: '150px', width: '100%', maxWidth: '300px', }} />
        <p><b style={{ fontSize: '30px' }}>Weekly Training</b></p>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Training that is scheduled once a week for learning and discussing patterns for all NBA teams and players to evaluate odds.</p>
        <p><b style={{ fontSize: '30px' }}>$39.99</b>/mo</p>
        <button style={{
          backgroundColor: '#00A375',
          width: '100px',
          height: '40px',
          color: 'white',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '1px 2px 2px 0px rgba(0, 0, 0, 0.3)',
        }}>Enroll</button>
      </div>
    </div>
  </section>
);

export default PricingCards;