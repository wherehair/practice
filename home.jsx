import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
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

      <h2 style={styles.title}>프로필</h2>

      <div style={styles.profileArea}>
        <div style={styles.face}>🙂</div>
        <div style={styles.form}>
          <div style={styles.row}>
            <label style={styles.label}>ID</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>닉네임</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>생년월일</label>
            <input type="text" style={styles.input} />
          </div>
        </div>
      </div>

      <button style={styles.button} onClick={() => navigate("/result")}>
        내 탈모 결과 보기
      </button>
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
  backIcon: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
  logo: {
    fontSize: "35px",
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
    borderRadius: "4px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  profileArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  face: {
    width: "160px",
    height: "160px",
    backgroundColor: "#eee",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "70px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  },
  label: {
    width: "100px",
  },
  input: {
    flex: 1,
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #999",
  },
  button: {
    marginTop: "30px",
    padding: "8px 12px",
    fontWeight: "bold",
    fontSize: "15px", // ✅ 이 줄 추가!
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
