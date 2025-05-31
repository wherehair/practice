import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./profileContext";

export default function Daily() {
  const navigate = useNavigate();
  const { profileImage } = useContext(ProfileContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
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

      <h2 style={styles.title}>일지</h2>

      <div style={styles.entry}>
        <div style={styles.date}>0월 0일</div>
        <div style={styles.box}></div>
        <div style={styles.label}>결과</div>
        <div style={styles.box}></div>
      </div>

      <div style={styles.entry}>
        <div style={styles.date}>0월 0일</div>
        <div style={styles.box}></div>
        <div style={styles.label}>결과</div>
        <div style={styles.box}></div>
      </div>
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
  entry: {
    marginBottom: "30px",
  },
  date: {
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "5px",
    marginBottom: "8px",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
  },
  box: {
    backgroundColor: "#e0e0e0",
    height: "100px",
    borderRadius: "10px",
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
