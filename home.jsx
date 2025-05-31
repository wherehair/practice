import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./profileContext";


export default function Home() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { profileImage, setProfileImage } = useContext(ProfileContext); // ✅ 반드시 함수 안에서 선언
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
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

      <h2 style={styles.title}>프로필</h2>

      <div style={styles.profileArea}>
        <div style={styles.bigface} onClick={handleImageClick}>
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
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div style={styles.form}>
          <div style={styles.row}>
            <label style={styles.label}>ID</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>닉네임</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>생년월일</label>
            <input type="text" style={styles.input} />
          </div>
        </div>
      </div>

      <button style={styles.button} onClick={() => navigate("/result")}>
        내 탈모 결과 보기
      </button>
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
    gap: "6px",
  },
  bar: {
    width: "30px",
    height: "5px",
    backgroundColor: "#000",
    borderRadius: "4px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  profileArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  bigface:{
    width: "160px",
    height: "160px",
    backgroundColor: "#eee",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "70px",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  },
  label: {
    width: "100px",
  },
  input: {
    flex: 1,
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #999",
  },
  button: {
    marginTop: "30px",
    padding: "8px 12px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
  },
};
