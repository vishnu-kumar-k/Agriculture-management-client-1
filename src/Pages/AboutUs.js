// src/AboutUs.js
import React from 'react';
import '../StyleSheet/Home.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to [Agriculture Assistance], where innovation meets agriculture. Our
        mission is to empower farmers and agricultural professionals with
        cutting-edge technology to enhance productivity, streamline operations,
        and ensure sustainable farming practices.
      </p>
      <h2 style={styles.heading}>Who We Are</h2>
      <p style={styles.paragraph}>
        At [Agriculture Assistance], we are a dedicated team of experts in
        agriculture, technology, and user experience. We understand the
        challenges that farmers face in today's dynamic agricultural landscape,
        and we are committed to providing solutions that make a real difference.
      </p>
      <h2 style={styles.heading}>Our Vision</h2>
      <p style={styles.paragraph}>
        We envision a future where agriculture is not just a livelihood but a
        thriving and technologically advanced industry. Through our Agriculture
        Management System, we aim to bridge the gap between traditional farming
        practices and modern technology, fostering a more efficient, productive,
        and environmentally conscious agricultural sector.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'justify',
  },
  heading: {
    color: '#4CAF50',
  },
  paragraph: {
    marginBottom: '15px',
  },
};

export default AboutUs;
