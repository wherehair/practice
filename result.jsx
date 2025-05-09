import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const image = state?.image;

  // 🔁 실제 AI 결과 이미지는 나중에 동적으로 대체 가능
  const aiImage =
    "https://images.unsplash.com/photo-1611570183516-bcb4b829d34e?auto=format&fit=crop&w=600&q=80";

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
          <p style={styles.label}>내 탈모 사진</p>
          {image ? (
            <img src={image} alt="업로드된 사진" style={styles.image} />
          ) : (
            <p>사진 없음</p>
          )}
        </div>

        <div style={styles.imageBox}>
          <p style={styles.label}>AI 유사 사례</p>
          <img src={aiImage} alt="AI 판단 이미지" style={styles.image} />
        </div>
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={() => navigate("/")}>
          저장하기
        </button>
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
    marginBottom: "30px",
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
    flexWrap: "wrap",
  },
  imageBox: {
    backgroundColor: "#e0e0e0",
    width: "300px",
    height: "350px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
