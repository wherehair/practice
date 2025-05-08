import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./mainlogo_img.png"; // ✅ PNG 이미지 import

export default function Main() {
  const navigate = useNavigate();

  const handleClick = (page) => {
    if (page === "로그인") navigate("/login");
    else if (page === "프로필") navigate("/home");
    else if (page === "커뮤니티") navigate("/comm");
    else if (page === "일지") navigate("/daily");
    else if (page === "탈모 테스트") navigate("/test");
    else if (page === "설문 조사") navigate("/survey");
    else alert(`${page} 페이지는 아직 연결되지 않았어요.`);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={mainLogo} alt="logo" style={styles.icon} />

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

      <main style={styles.main}>
        <button
          style={styles.mainButton}
          onClick={() => handleClick("탈모 테스트")}
        >
          탈모 테스트
        </button>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => handleClick("커뮤니티")}>
            커뮤니티
          </button>
          <button style={styles.button} onClick={() => handleClick("일지")}>
            일지
          </button>
        </div>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => handleClick("로그인")}>
            로그인
          </button>
          <button style={styles.button} onClick={() => handleClick("프로필")}>
            프로필
          </button>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    backgroundColor: "#ccc",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "80px",
  },
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  logo: {
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
  },
  menuIcon: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  bar: {
    width: "30px",
    height: "5px",
    backgroundColor: "#000",
    borderRadius: "4px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  mainButton: {
    width: "300px",
    height: "70px",
    padding: "20px 50px",
    fontSize: "23px",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",

  },
  buttonRow: {
    display: "flex",
    gap: "20px",
  },
  button: {
    width: "140px",
    height: "70px",
    padding: "15px 25px",
    fontSize: "23px",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
