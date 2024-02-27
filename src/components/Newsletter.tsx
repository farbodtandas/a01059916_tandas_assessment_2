import React from "react";

const NewsletterSection = () => (
  <section style={{
    background: 'linear-gradient(135deg, #00A375 0%, #FC9F5B 100%)',
    color: 'white',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    textAlign: 'center',
  }}>
    <h2 style={{fontSize: '24px', fontWeight: 'bold'}}>Stay Updated</h2>
    <p>Subscribe to our newsletter for the latest updates on odds and stats.</p>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '500px',
    }}>
      <input type="email" placeholder="Enter your email" style={{
        flexGrow: 1,
        border: 'none',
        padding: '1rem',
        color: 'black',
        borderRadius: '50px 0 0 50px',
      }} />
      <button style={{
        backgroundColor: '#FC9F5B',
        border: 'none',
        borderRadius: '0 50px 50px 0',
        padding: '1rem 2rem',
        color: 'black',
        fontWeight: 'bold',
      }}>Subscribe</button>
    </div>
    <style>
      {`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
            gap: 0.5rem;
          }
          input, button {
            width: 100%;
            border-radius: 50px; // Adjusted for consistent appearance
          }
        }
      `}
    </style>
  </section>
);

export default NewsletterSection;
