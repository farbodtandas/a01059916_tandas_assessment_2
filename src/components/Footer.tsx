import React from 'react';

const Footer = () => (
  <footer>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '50px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px',
      padding: '20px',
      backgroundColor: 'white',
    }}>
      <p style={{ color: 'black',}}>&copy; Farbod Tandas</p>
      <div>
        <a href="https://github.com/jillnguyen2311/NBATracker-final-project-MDIA3109" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          color: 'black',
        }}><img src='images/github.png' style={{width: 'auto', height: '30px'}}/>Check out the github!</a>
      </div>
    </div>
  </footer>
);

export default Footer;