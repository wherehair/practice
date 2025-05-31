import React, { useState, useEffect, useContext } from "react";
import { ProfileContext } from "./profileContext";
import { useNavigate, useParams } from "react-router-dom";
import { usePostContext } from "./postContext";

export default function Write() {
  const navigate = useNavigate();
  const { profileImage } = useContext(ProfileContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { id } = useParams();
  const { posts, addPost, updatePost, deletePost } = usePostContext();

  const isEdit = Boolean(id);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (isEdit) {
      const post = posts.find((p) => p.id === Number(id));
      if (post) {
        setTag(post.tag);
        setTitle(post.title);
        setContent(post.content);
        setImage(post.image);
      }
    }
  }, [id, isEdit, posts]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!tag || !title || !content) {
      alert("모든 내용을 입력해주세요!");
      return;
    }
    if (isEdit) {
      updatePost({ id: Number(id), tag, title, content, image });
      alert("글이 수정되었습니다!");
    } else {
      addPost({ tag, title, content, image });
      alert("글이 저장되었습니다!");
    }
    navigate("/comm");
  };

  const handleDelete = () => {
    if (isEdit) {
      deletePost(Number(id));
      alert("삭제되었습니다.");
      navigate("/comm");
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

      <h2 style={styles.title}>{isEdit ? "글 수정" : "글쓰기"}</h2>

      <form style={styles.form}>
        <div style={styles.topRight}>
          <button type="button" style={styles.submitBtn} onClick={handleSubmit}>
            완료
          </button>
        </div>

        <div style={styles.inputBlock}>
          <label style={styles.label}>
            태그
            <input
              style={styles.input}
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            제목
            <input
              style={styles.input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            내용
            <textarea
              style={styles.textarea}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            이미지
            <input
              style={styles.imagebox}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {image && (
          <img
            src={image}
            alt="업로드된 사진"
            style={{ marginTop: "10px", width: "50%", borderRadius: "10px" }}
          />
        )}

        {isEdit && (
          <div style={styles.bottomRow}>
            <button
              type="button"
              style={styles.bottomBtn}
              onClick={handleDelete}
            >
              삭제
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontWeight: "bold",
    backgroundColor: "#D9D9D9",
    padding: "30px",
    fontFamily: "sans-serif",
    boxSizing: "border-box",
    minHeight: "100vh", // ✅ 화면 전체 높이를 채워 회색으로 고정
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
  form: {
    padding: "20px",
    borderRadius: "10px",
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    padding: "15px",
  },
  submitBtn: {
    fontSize: "15px",
    padding: "5px 15px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
  label: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  input: {
    width: "98%",
    padding: "10px",
    marginTop: "5px",
    border: "none",
    borderRadius: "6px",
  },
  textarea: {
    width: "98%",
    height: "100px",
    marginTop: "5px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
  },
  imagebox: {
    borderRadius: "6px",
    width: "30%",
    height: "auto",
    padding: "10px",
    marginTop: "5px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  bottomBtn: {
    fontSize: "15px",
    padding: "8px 16px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#ccc",
    borderRadius: "6px",
    marginLeft: "5px",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  rightBtns: {
    display: "flex",
    gap: "5px",
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
