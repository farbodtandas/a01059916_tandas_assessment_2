import React from 'react';

const Header = () => (
  <header style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    margin: '0 auto',
    width: '100%',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)',
  }}>
    <img src='images/OddBall.png' alt="Logo" style={{ height: '3rem', width: 'auto', justifyContent: 'center', alignItems: 'center', }} />
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '1rem',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <a style={{cursor: 'pointer', fontSize: '0.9rem'}}>Contact</a>
      <a style={{cursor: 'pointer', fontSize: '0.9rem'}}>Pricing</a>
      <button style={{
        backgroundColor: '#00A375',
        minWidth: '100px',
        height: '2.5rem',
        color: 'white',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '1px 2px 2px 0px rgba(0, 0, 0, 0.3)',
        fontSize: '0.9rem',
      }}>Sign Up</button>
    </div>
    <style>
      {`
        @media (max-width: 768px) {
          header {
            flex-direction: column;
            padding: 0.5rem; // Reduce padding
          }
          img {
            margin-bottom: 0.5rem; // Reduce space between the logo and menu items
            height: 2.5rem; // Reduce logo size
          }
          div {
            flex-direction: column;
            gap: 0.5rem; // Reduce gap
          }
          a, button {
            fontSize: 0.8rem; // Reduce font size
          }
          button {
            width: 80%; // Adjust width for better fit
            height: 2rem; // Reduce button height
          }
        }
      `}
    </style>
  </header>
);

export default Header;
