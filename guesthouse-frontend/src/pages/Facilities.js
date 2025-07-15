// src/pages/Facilities.js
import React from "react";

const facilities = [
  {
    title: "Fully Furnished Rooms",
    icon: "fa-bed",
    image: "/images/room.jpg",
    description: "Spacious and well-equipped rooms designed for comfort and rest.",
  },
  {
    title: "High-Speed Wi-Fi",
    icon: "fa-wifi",
    image: "/images/wifi.jpg",
    description: "Seamless internet access in all guest rooms and premises.",
  },
  {
    title: "Dining Services",
    icon: "fa-utensils",
    image: "/images/dining.jpg",
    description: "Nutritious meals served hygienically in a clean mess facility.",
  },
  {
    title: "Daily Housekeeping",
    icon: "fa-broom",
    image: "/images/housekeeping.jpg",
    description: "Regular room cleaning & sanitization ensuring guest hygiene.",
  },
  {
    title: "Parking Facility",
    icon: "fa-square-parking",
    image: "/images/parking.jpg",
    description: "On-campus parking available for all guests and visitors.",
  },
  {
    title: "24x7 Security",
    icon: "fa-shield-halved",
    image: "/images/security.jpg",
    description: "CCTV surveillance and dedicated security personnel for safety.",
  },
];

function Facilities() {
  const styles = {
    container: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
    },
    heading: {
      color: "#003366",
      fontSize: "28px",
      marginBottom: "30px",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      width: "300px",
      padding: "20px",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    title: {
      fontSize: "18px",
      marginBottom: "10px",
      color: "#003366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    icon: {
      fontSize: "20px",
      color: "#003366",
    },
    description: {
      fontSize: "14px",
      color: "#444",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Facilities at AKU Guest House</h2>
      <div style={styles.grid}>
        {facilities.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3 style={styles.title}>
              <i className={`fas ${item.icon}`} style={styles.icon}></i>
              {item.title}
            </h3>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
