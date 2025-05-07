import React from "react";
import { useNavigate } from "react-router-dom";

export default function Daily() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div
          style={{ ...styles.logo, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          🌱 이게모헤어~?
        </div>
        <div style={styles.menuIcon}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      </header>

      <h2 style={styles.title}>일지</h2>

      <div style={styles.entry}>
        <div style={styles.date}>0월 0일</div>
        <div style={styles.box}></div>
        <div style={styles.label}>결과</div>
        <div style={styles.box}></div>
      </div>

      <div style={styles.entry}>
        <div style={styles.date}>0월 0일</div>
        <div style={styles.box}></div>
        <div style={styles.label}>결과</div>
        <div style={styles.box}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  logo: {
    fontWeight: "bold",
  },
  menuIcon: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  bar: {
    width: "30px",
    height: "4px",
    backgroundColor: "#000",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  entry: {
    marginBottom: "30px",
  },
  date: {
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "5px",
    marginBottom: "8px",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
  },
  box: {
    backgroundColor: "#e0e0e0",
    height: "100px",
    borderRadius: "10px",
  },
};
