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

      <div style={styles.formWrapper}>
        <div style={styles.formColumn}>
          <div style={styles.formRow}>
            <label style={styles.label}>ID</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.formRow}>
            <label style={styles.label}>PASSWORD</label>
            <input type="password" style={styles.input} />
          </div>
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
    fontFamily: "sans-serif",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  backIcon: {
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
    marginBottom: "40px",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    width: "100px",
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "right",
  },
  input: {
    width: "300px",
    height: "35px",
    borderRadius: "6px",
    border: "1px solid #999",
    padding: "0 10px",
    fontSize: "16px",
  },
  loginBtn: {
    height: "90px", // 입력 두 줄과 높이 비슷하게
    padding: "0 25px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    fontSize: "14px",
    marginTop: "30px",
  },
};
