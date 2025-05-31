import React, { useState, useEffect, useContext } from "react";
import { ProfileContext } from "./profileContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);
  const { profileImage } = useContext(ProfileContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const linkTexts = ["회원가입", "아이디 찾기", "비밀번호 찾기"];
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
  const saved = JSON.parse(localStorage.getItem("signupData"));

  if (!saved) {
    alert("회원가입 정보를 찾을 수 없습니다. 회원가입 먼저 해주세요.");
    return;
  }

  if (!id || !pw) {
    alert("아이디와 비밀번호를 입력해주세요.");
    return;
  }

  if (id === saved.ID && pw === saved.PASSWORD) {
    alert("로그인 성공!");
    navigate("/main");
  } else {
    alert("로그인 실패! 아이디나 비밀번호를 확인해주세요.");
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

      <h2 style={styles.title}>로그인</h2>

      <div style={styles.formWrapper}>
        <div style={styles.formColumn}>
          <div style={styles.formRow}>
            <label style={styles.label}>ID</label>
            <input
              type="text"
              style={styles.input}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div style={styles.formRow}>
            <label style={styles.label}>PASSWORD</label>
            <input
              type="password"
              style={styles.input}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />          
          </div>
        </div>
        <button style={styles.loginBtn}>
          <div style={styles.login} onClick={handleLogin}>로그인</div>
        </button>
      </div>

      <div style={styles.links}>
        {linkTexts.map((text, i) => (
          <span
            key={i}
            style={{
              color: hoverIndex === i ? "blue" : "black",
              textDecoration: "none",
              transition: "color 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              if (text === "회원가입") navigate("/signup");
              else if (text === "아이디 찾기") navigate("/find-id");
              else if (text === "비밀번호 찾기") navigate("/find-pw");
            }}
          >
            {text}
          </span>
        ))}
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
    fontWeight: "bold",
    fontSize: "35px",
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
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    marginTop: "15px"
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    width: "100px",
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "right",
  },
  input: {
    width: "280px",
    height: "35px",
    borderRadius: "6px",
    border: "1px solid #999",
    padding: "0 10px",
    fontSize: "16px",
  },
  loginBtn: {
    height: "90px",
    padding: "0 25px",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px"
  },
  login: {
    height: "50px",
    padding: "0 25px",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    fontSize: "14px",
    marginTop: "30px",
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
