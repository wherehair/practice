import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleAnalyze = () => {
    navigate("/result", { state: { image } });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

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

      <h2 style={styles.title}>탈모 테스트</h2>

      <div style={styles.imageBox}>
        <p style={styles.img}>내 탈모 사진</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img
            src={image}
            alt="업로드된 사진"
            style={{ marginTop: "10px", width: "50%", borderRadius: "10px" }}
          />
        )}
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={handleAnalyze}>
          분석하기
        </button>
        <button style={styles.button} onClick={() => navigate("/")}>
          돌아가기
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontWeight: "bold",
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
    fontSize: "32px",
    fontWeight: "bold",
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
    fontSize: "28px",
    marginBottom: "20px",
  },
  imageBox: {
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },
  img: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
  },
};
