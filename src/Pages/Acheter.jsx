import React from 'react'

// import { Link } from 'react-router-dom';

import '../CSS/Acheter.css'

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  container: {
    textAlign: "center",
    padding: "20px",
    background: `url("https://www.ewigo.com/wp-content/uploads/2022/07/Mask-Group-122-1-e1633859272192.jpg") no-repeat center center/cover`,
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  
  header: {
    h1: {
      fontSize: "2.5rem",
      margin: 0,
      color: "white",
    },
    p: {
      fontSize: "1.2rem",
      margin: "10px 0 30px 0",
      
      color: "white",
    },
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px 0 0 5px",
    width: "300px",
  },
  searchButton: {
    padding: "16px",
    fontSize: "1rem",
    color: "red",
    backgroundColor: "#ff5722",
    border: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  filterDropdown: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "150px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    color: "white",
  },
  checkboxInput: {
    marginRight: "5px",
  },
};

const Acheter = () => {
  return (
    <div>
      <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.header.h1}>TROUVEZ LE VÉHICULE DE VOS RÊVES</h1>
        <p style={styles.header.p}>pour parcourir les routes en toute sérénité</p>
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Recherche de mon véhicule"
        />
        <button style={styles.searchButton} >→</button>
      </div>
      <div style={styles.filters}>
        <select style={styles.filterDropdown}>
          <option>Type</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Marque</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Modèle</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Carburant</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Boîte de vitesse</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Kms max</option>
        </select>
        <select style={styles.filterDropdown}>
          <option>Prix max</option>
          <option type="checkbox" style={styles.checkboxInput}>1515</option>
        </select>
        <label style={styles.checkboxLabel}>
          <input type="checkbox" style={styles.checkboxInput} />
          Fiable ou remboursé
        </label>
      </div>
    </div>
    </div>
  )
}

export default Acheter
