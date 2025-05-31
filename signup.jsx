import React, { useContext, useState } from "react";
import { ProfileContext } from "./profileContext";import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const { profileImage } = useContext(ProfileContext);
    const [dropdownOpen, setDropdownOpen] = useState(false); // 🔹 드롭다운 상태
    
    const [formData, setFormData] = useState({
        이름: "",
        닉네임: "",
        생년월일: "",
        성별: "",
        Email: "",
        ID: "",
        PASSWORD: "",
    });

    const handleSignup = () => {
        console.log("저장될 데이터:", formData); // 콘솔에 찍히는지 확인
        localStorage.setItem("signupData", JSON.stringify(formData));
        alert("회원가입이 완료되었습니다! 로그인 해주세요.");
        navigate("/login");
        };
    const handleLogout = () => {
        localStorage.removeItem("signupData");
        alert("로그아웃 되었습니다.");
        navigate("/login");
    };

  return (
    <div style={styles.container}>
      {/* 햄버거 메뉴 */}
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

      {/* 제목 */}
      <h2 style={styles.title}>회원가입</h2>

      {/* 입력 폼 */}
      <div style={styles.form}>
        {[
          "이름",
          "닉네임",
          "생년월일",
          "성별",
          "Email",
          "ID",
          "PASSWORD",
        ].map((label) => (
          <div style={styles.row} key={label}>
            <label style={styles.label}>{label}</label>
            <input
                style={styles.input}
                type="text"
                value={formData[label]}
                onChange={(e) =>
                    setFormData({ ...formData, [label]: e.target.value }) // ✅ 값 업데이트
                }
            />
          </div>
        ))}

        {/* 회원가입 버튼 */}
        <button style={styles.signupBtn} onClick={handleSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    height: "100vh",
    padding: "40px",
    boxSizing: "border-box",
    position: "relative",
    fontFamily: "sans-serif",
  },
  menuIcon: {
    position: "absolute",
    top: "20px",
    right: "20px",
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
    textAlign: "center",
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "400px",
    margin: "0 auto",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    width: "100px",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#eee",
  },
  signupBtn: {
    marginTop: "30px",
    padding: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
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
