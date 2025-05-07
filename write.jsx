import React from "react";
import { useNavigate } from "react-router-dom";

export default function Write() {
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

      <h2 style={styles.title}>글쓰기</h2>

      <form style={styles.form}>
        <div style={styles.topRight}>
          <button style={styles.submitBtn}>완료</button>
        </div>

        <label style={styles.label}>태그</label>
        <input style={styles.input} type="text" />

        <label style={styles.label}>제목</label>
        <input style={styles.input} type="text" />

        <label style={styles.label}>내용</label>
        <textarea style={styles.textarea} />

        <label style={styles.label}>이미지</label>
        <textarea style={styles.textarea} />

        <div style={styles.bottomRow}>
          <div style={styles.rightBtns}>
            <div></div>
            <button style={styles.bottomBtn}>목록</button>
            <button style={styles.bottomBtn}>수정</button>
            <button style={styles.bottomBtn}>삭제</button>
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
    marginBottom: "30px",
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
  form: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "10px",
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  submitBtn: {
    fontSize:"15px",
    padding: "5px 15px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
  },
  label: {
    fontWeight: "bold", // ✅ 추가된 부분
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "6px",
  },
  textarea: {
    width: "100%",
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
  },
  bottomBtn: {
    fontSize: "15px",
    padding: "8px 16px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
    marginLeft: "5px",
    justifyContent: "flex-end", // 👉 오른쪽 정렬!
  },
  rightBtns: {
    display: "flex",
    gap: "5px",
  },
};
