import React from "react";
import { useNavigate } from "react-router-dom";

export default function Comm() {
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

      <h2 style={styles.title}>커뮤니티</h2>

      <div style={styles.searchRow}>
        <button
          style={styles.writeButton}
          onClick={() => navigate("/write")} // ✅ 여기에 넣기
        >
          글쓰기
        </button>
        <input type="text" placeholder="검색" style={styles.searchInput} />
      </div>

      <div style={styles.board}></div>

      <div style={styles.pageNav}>&lt;1/2/3/4/5/6/7/8/9&gt;</div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    height: "100vh",
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
    gap: "6px",
  },
  bar: {
    width: "30px",
    height: "5px",
    backgroundColor: "#000",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  searchRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  writeButton: {
    padding: "8px 16px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#e0e0e0",
    borderRadius: "6px",
  },
  searchInput: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "none",
  },
  board: {
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    height: "300px",
  },
  pageNav: {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
