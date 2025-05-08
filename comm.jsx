import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Comm() {
  const dummyPosts = [
    { id: 1, title: "탈모 관리 꿀팁 공유해요!" },
    { id: 2, title: "오늘 머리 감았는데 너무 빠져요ㅠㅠ" },
    { id: 3, title: "좋은 샴푸 추천 좀요!" },
    { id: 4, title: "병원 진료 후기 써봅니다." },
    { id: 5, title: "이게모헤어 첫 글 남겨요~" },
    { id: 6, title: "두피 마사지 효과 본 사람?" },
    { id: 7, title: "영양제 먹으면 진짜 나아요?" },
    { id: 8, title: "모자 자주 쓰면 안 좋나요?" },
    { id: 9, title: "스트레스 탈모 극복법 공유" },
  ];

  const [posts] = useState(dummyPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const navigate = useNavigate();

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
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

      <h2 style={styles.title}>커뮤니티</h2>

      <div style={styles.searchArea}>
        <button style={styles.writeBtn} onClick={() => navigate("/write")}>
          글쓰기
        </button>
        <input type="text" placeholder="검색" style={styles.searchInput} />
        <span style={styles.searchIcon}>🔍</span>
      </div>

      <div style={styles.listBox}>
        {currentPosts.map((post) => (
          <div key={post.id} style={styles.postItem}>
            {post.title}
          </div>
        ))}
      </div>

      <div style={styles.pagination}>
        <span
          style={styles.pageArrow}
          onClick={() => handlePageClick(Math.max(currentPage - 1, 1))}
        >
          &lt;
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            onClick={() => handlePageClick(i + 1)}
            style={{
              margin: "0 5px",
              cursor: "pointer",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </span>
        ))}
        <span
          style={styles.pageArrow}
          onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))}
        >
          &gt;
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontWeight: "bold",
    backgroundColor: "#cfcfcf",
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
    cursor: "pointer",
  },
  bar: {
    width: "30px",
    height: "5px",
    backgroundColor: "black",
    borderRadius: "4px",
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
    fontSize: "15px",
    padding: "5px 10px",
    fontWeight: "Bold",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#fff",
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
    textSize: "30px",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
