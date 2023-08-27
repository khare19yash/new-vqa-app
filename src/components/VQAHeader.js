import React from 'react';

const VQAHeader = ({ datasets, onDatasetClick }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Image Viewer App</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          {datasets.map(dataset => (
            <li key={dataset.id} style={styles.navItem}>
              <button
                style={styles.button}
                onClick={() => onDatasetClick(dataset.id)}
              >
                {dataset.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
  },
  nav: {},
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginLeft: '1rem',
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default VQAHeader;
