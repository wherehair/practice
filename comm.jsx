import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Comm() {
  const dummyPosts = [
    { id: 1, title: "탈모 관리 꿀팁 공유해요!" },
    { id: 2, title: "오늘 머리 감았는데 너무 빠져요ㅠㅠ" },
    { id: 3, title: "좋은 샴푸 추천 좀요!" },
    { id: 4, title: "병원 진료 후기 써봅니다." },
    { id: 5, title: "이게모헤어 첫 글 남겨요~" },
  ];

  const [posts] = useState(dummyPosts);
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <header style={styles.header}>
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

      {/* 제목 */}
      <h2 style={styles.title}>커뮤니티</h2>

      {/* 글쓰기 + 검색창 */}
      <div style={styles.searchArea}>
        <button style={styles.writeBtn} onClick={() => navigate("/write")}>
          글쓰기
        </button>
        <input type="text" placeholder="검색" style={styles.searchInput} />
        <span style={styles.searchIcon}>🔍</span>
      </div>

      {/* 게시글 리스트 */}
      <div style={styles.listBox}>
        {posts.map((post) => (
          <div key={post.id} style={styles.postItem}>
            {post.title}
          </div>
        ))}
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
    padding: "10px",
    overflowY: "auto",
  },
  postItem: {
    padding: "10px",
    borderBottom: "1px solid #aaa",
    cursor: "pointer",
  },
  pagination: {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
