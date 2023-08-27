import React from 'react';
import PropTypes from 'prop-types';

const images = [
    "https://www.jquery-az.com/html/images/banana.jpg",
    "https://www.jquery-az.com/html/images/banana.jpg",
    "https://www.jquery-az.com/html/images/banana.jpg",
    "https://www.jquery-az.com/html/images/banana.jpg"
  ];

const VQAImages = ({ imageByte, title, caption }) => {
  return (
    <div style={styles.card}>
      {/* <img src={`data:image/jpeg;base64,${imageByte}`} alt={title} style={styles.image} /> */}
      <img src={imageByte} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.caption}>{caption}</p>
      </div>
    </div>
  );
};

VQAImages.propTypes = {
  imageByte: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  content: {
    padding: '1rem',
  },
  title: {
    margin: '0',
    fontSize: '1.25rem',
  },
  caption: {
    margin: '0',
    color: '#666',
    fontSize: '0.875rem',
  },
};

export default VQAImages;
