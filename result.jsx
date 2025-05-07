import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const image = location.state?.image;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.backIcon} onClick={() => navigate(-1)}>👈</div>
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

      <h2 style={styles.title}>탈모 테스트 결과</h2>

      <div style={styles.imageRow}>
      <div style={styles.imageBox}>
        {image ? (
            <img
            src={image}
            alt="내 탈모 사진"
            style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }}
            />
        ) : (
            <p>내 탈모 사진</p>
        )}
        </div>
        <div style={styles.imageBox}>
          <p>비교 사진</p>
        </div>
      </div>

      <div style={styles.descriptionBox}>
        <p>결과 설명</p>
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.button}>저장</button>
        <button style={styles.button}>삭제</button>
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
    alignItems: "center",
    marginBottom: "20px",
  },
  backIcon:{
    fontSize: "35px",
  },
  logo: {
    fontSize: "35px",
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
  imageRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "20px",
  },
  imageBox: {
    backgroundColor: "#e0e0e0",
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  descriptionBox: {
    fontSize: "20px",
    fontWeight: "Bold",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    height: "100px",
    padding: "10px",
    marginBottom: "20px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
};
