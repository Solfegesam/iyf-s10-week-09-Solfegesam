import { useState } from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  return (
    <div
      style={{
        background: "var(--card)",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease",
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          textTransform: "capitalize",
          color: "var(--text)",
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          marginBottom: "15px",
          color: "var(--muted)",
          lineHeight: "1.5",
        }}
      >
        {post.body.slice(0, 120)}...
      </p>

      {/* ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to={`/posts/${post.id}`}
          style={{
            color: "var(--primary)",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Read More
        </Link>

        <button
          onClick={handleLike}
          style={{
            padding: "6px 12px",
            border: "none",
            background: "var(--primary)",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

export default PostCard;