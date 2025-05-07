import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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

      <h2 style={styles.title}>로그인</h2>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label>ID</label>
          <input type="text" />
        </div>
        <div style={styles.inputGroup}>
          <label>PASSWORD</label>
          <input type="password" />
        </div>
        <button style={styles.loginBtn}>로그인</button>
      </div>

      <div style={styles.links}>
        <a href="#">회원가입</a>
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    height: "100vh",
    padding: "30px",
    boxSizing: "border-box",
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
    fontWeight: "bold",
    fontSize: "35px",
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
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    gap: "5px",
    fontWeight: "bold",
  },
  loginBtn: {
    padding: "10px 20px", 
    border: "none",
    backgroundColor: "#e0e0e0",
    borderRadius: "6px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    fontSize: "14px",
  },
};
