import { useState } from "react";

function CreatePostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Both title and body are required");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    onAddPost(newPost);

    setTitle("");
    setBody("");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Create New Post</h3>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows="4"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        Post
      </button>
    </form>
  );
}

export default CreatePostForm;