import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "./postContext";
import { ProfileContext } from "./profileContext";

export default function Comm() {
  const navigate = useNavigate();
  const { posts } = usePostContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { profileImage } = useContext(ProfileContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 🔹 드롭다운 상태

  const postsPerPage = 5;

  const filteredPosts = posts.filter((post) =>
    post.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = [...filteredPosts].slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageClick = (pageNum) => setCurrentPage(pageNum);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCurrentPage(1); // 검색 시 1페이지로 초기화
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("signupData");
    alert("로그아웃 되었습니다.");
    navigate("/login");
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
          🌱 이것모헤어~?
        </div>
        <div style={styles.menuIcon}>
          <div style={styles.face} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                style={{ width: "100%", height: "100%", borderRadius: "100%", objectFit: "cover"}}
              />
            ) : (
              "🙂"
            )}
          </div>

          {dropdownOpen && (
            <div style={styles.dropdown}>
              <div style={styles.menuItem} onClick={() => navigate("/home")}>
                프로필 보기
              </div>
              <div style={styles.menuItem} onClick={() => navigate("/home")}>
                프로필 수정
              </div>
              <div style={styles.menuItem} onClick={handleLogout}>
                로그아웃
              </div>
            </div>
          )}
        </div>
      </header>

      <h2 style={styles.title}>커뮤니티</h2>

      <div style={styles.searchArea}>
        <button style={styles.writeBtn} onClick={() => navigate("/write")}>
          글쓰기
        </button>
        <input
          type="text"
          placeholder="태그로 검색 (예: 탈모)"
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div style={styles.listBox}>
        {currentPosts.map((post) => (
          <div
            key={post.id}
            style={styles.postItem}
            onClick={() => navigate(`/write/${post.id}`)}
          >
            <strong>{post.tag}</strong> {post.title}
          </div>
        ))}
      </div>
      
      <div style={styles.pagination}>
        <span style={styles.pageArrow} onClick={() => handlePageClick(1)}>
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
          onClick={() => handlePageClick(totalPages)}
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
    minHeight: "100vh",
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
    width: "40%",
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  listBox: {
    width: "90%",
    maxWidth: "600px",
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
    fontSize: "20px",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
  pageArrow: {
    cursor: "pointer",
    margin: "0 10px",
  },
  face: {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    backgroundColor: "#eee",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "60px",
    right: "0px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    zIndex: 1,
    display: "flex",
    flexDirection: "column", 
    alignItems: "stretch",  
},
  menuItem: {
    width: "100px",
    padding: "12px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    textAlign: "center",      
    transition: "background 0.2s",
},
};
