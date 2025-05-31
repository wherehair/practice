import React, { useContext, useState } from "react";
import { ProfileContext } from "./profileContext";
import { useNavigate } from "react-router-dom";
import mainLogo from "./mainlogo_img.png";

export default function Main() {
  const navigate = useNavigate();
  const { profileImage } = useContext(ProfileContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 🔹 드롭다운 상태

  const handleClick = (page) => {
    if (page === "로그인") navigate("/login");
    else if (page === "프로필") navigate("/home");
    else if (page === "커뮤니티") navigate("/comm");
    else if (page === "일지") navigate("/daily");
    else if (page === "탈모 테스트") navigate("/test");
    else if (page === "설문 조사") navigate("/survey");
    else alert(`${page} 페이지는 아직 연결되지 않았어요.`);
  };

  const handleLogout = () => {
    localStorage.removeItem("signupData");
    alert("로그아웃 되었습니다.");
    navigate("/login");
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
          <div style={styles.face} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                style={{ width: "100%", height: "100%", borderRadius: "100%" }}
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
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
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
