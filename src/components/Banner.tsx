import React from 'react';
import Spline from '@splinetool/react-spline';

const SubBanner = () => (
  <>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px auto',
      padding: '40px',
      background: 'linear-gradient(to right, #ffffff, #FBFFF4)',
      borderRadius: '20px',
      boxShadow: '0 4px 6px 2px rgba(0, 0, 0, 0.2)',
      maxWidth: '1400px',
    }}>
      <div style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
      }}>
        <p>Oddball is a basketball game tracker that combines real-time game statistics with live betting odds.
          It offers a user-friendly interface for easy access to scores, player performance, and team stats.
          Standout features include up-to-the-minute betting odds, catering to enthusiasts looking to enhance their viewing experience with informed betting decisions.
          Oddball transforms basketball-watching by providing a seamless platform to track games and stay updated on the latest odds, making the experience dynamic and engaging.</p>
      </div>
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Spline scene="https://prod.spline.design/AwkSPFcs7Wy56ft8/scene.splinecode" style={{ height: '300px', width: '100%', maxWidth: '300px' }} />
      </div>
    </div>
    <style>
      {`
        @media only screen and (max-width: 768px) {
          .subbanner-grid {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .subbanner-spline {
            max-width: 100%;
            height: auto;
          }
        }
      `}
    </style>
  </>
);

export default SubBanner;
