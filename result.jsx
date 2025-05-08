import React from "react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          alt="back"
          style={styles.backIcon}
          onClick={() => navigate(-1)}
        />
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
          <p>내 탈모 사진</p>
        </div>
        <div style={styles.imageBox}>
          <p>비교 사진</p>
        </div>
      </div>

      <div style={styles.descriptionBox}>
        <p>
          탈모 유형은 M자형이며, 초기 단계로 판단됩니다. 지속적인 관리가
          필요합니다.
        </p>
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
    fontWeight: "bold",
    backgroundColor: "#ccc",
    height: "100vh",
    padding: "30px",
    fontFamily: "sans-serif",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    position: "relative", 
  },
  backIcon: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  menuIcon: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },
  bar: {
    width: "30px",
    height: "4px",
    backgroundColor: "#000",
    borderRadius: "4px",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  imageRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
  },
  imageBox: {
    backgroundColor: "#e0e0e0",
    width: "220px",
    height: "220px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  descriptionBox: {
    backgroundColor: "#e0e0e0",
    borderRadius: "12px",
    height: "120px",
    padding: "15px",
    marginBottom: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  button: {
    padding: "8px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
  },
};
