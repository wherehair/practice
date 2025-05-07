import React from "react";

export default function Comm() {
  return (
    <div style={styles.container}>
      {/* 상단 헤더 */}
      <header style={styles.header}>
        <div style={styles.logo}>🌱 이게모헤어~?</div>
        <div style={styles.menuIcon}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      </header>

      {/* 제목 */}
      <h2 style={styles.title}>커뮤니티</h2>

      {/* 글쓰기 버튼 + 검색창 */}
      <div style={styles.searchArea}>
        <button style={styles.writeBtn}>글쓰기</button>
        <input type="text" placeholder="검색" style={styles.searchInput} />
        <span style={styles.searchIcon}>🔍</span>
      </div>

      {/* 게시글 리스트 박스 */}
      <div style={styles.listBox}>
        {/* 여기에 게시글 리스트가 들어감 */}
      </div>

      {/* 페이지네이션 */}
      <div style={styles.pagination}>
        {"< 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 >"}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#cfcfcf",
    height: "100vh",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    fontSize: "20px",
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
    height: "5px",
    backgroundColor: "black",
  },
  title: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  searchArea: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    justifyContent: "center",
  },
  writeBtn: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  searchInput: {
    width: "50%",
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  searchIcon: {
    cursor: "pointer",
    fontSize: "18px",
  },
  listBox: {
    width: "90%",
    height: "300px",
    backgroundColor: "#e6e6e6",
    margin: "0 auto",
    borderRadius: "10px",
  },
  pagination: {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
