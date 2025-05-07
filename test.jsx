import { useNavigate } from "react-router-dom";
import React, { useState } from "react"; // ✅ useState 꼭 import!!

export default function Test() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleAnalyze = () => {
    // 분석하기 버튼 누르면 결과 페이지로 이동
    navigate("/result", { state: { image } });
  };

  const handleBack = () => {
    // 돌아가기 버튼 누르면 메인으로 이동
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 미리보기용 URL 생성
    }
  };

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

      <h2 style={styles.title}>탈모 테스트</h2>

      <div style={styles.imageBox}>
        <p>내 탈모 사진</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        
        {image && (
          <img
            src={image}
            alt="업로드된 사진"
            style={{ marginTop: "10px", width: "100%", borderRadius: "10px" }}
          />
        )}
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={handleAnalyze}>
          분석하기
        </button>
        <button style={styles.button} onClick={handleBack}>
          돌아가기
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
  imageBox: {
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    height: "auto",
    padding: "20px",
    marginBottom: "20px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
};
