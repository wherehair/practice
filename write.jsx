import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
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

      <h2 style={styles.title}>글쓰기</h2>

      <form style={styles.form}>
        <div style={styles.topRight}>
          <button type="button" style={styles.submitBtn}>
            완료
          </button>
        </div>

        <label style={styles.label}>태그</label>
        <input style={styles.input} type="text" />

        <label style={styles.label}>제목</label>
        <input style={styles.input} type="text" />

        <label style={styles.label}>내용</label>
        <textarea style={styles.textarea} placeholder="내용을 입력하세요" />

        <label style={styles.label}>이미지</label>
        <input
          style={styles.imagebox}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {image && (
          <img
            src={image}
            alt="업로드된 사진"
            style={{ marginTop: "10px", width: "100%", borderRadius: "10px" }}
          />
        )}

        <div style={styles.bottomRow}>
          <div style={styles.rightBtns}>
            <button
              type="button"
              style={styles.bottomBtn}
              onClick={() => navigate("/comm")}
            >
              목록
            </button>
            <button type="button" style={styles.bottomBtn}>
              수정
            </button>
            <button type="button" style={styles.bottomBtn}>
              삭제
            </button>
          </div>
        </div>
      </form>
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
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
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
    borderRadius: "4px",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "10px",
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    padding: "15px",
  },
  submitBtn: {
    fontSize: "15px",
    padding: "5px 15px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "98%",
    padding: "10px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "6px",
  },
  imagebox: {
    backgroundColor: "#fff",
    borderRadius: "6px",
    width: "98%",
    height: "auto",
    padding: "10px",
    marginBottom: "20px",
  },
  textarea: {
    width: "98%",
    height: "100px",
    marginBottom: "15px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  bottomBtn: {
    fontSize: "15px",
    padding: "8px 16px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
    marginLeft: "5px",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  rightBtns: {
    display: "flex",
    gap: "5px",
  },
};
