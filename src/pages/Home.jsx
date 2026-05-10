import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "10px",
          color: "var(--text)",
        }}
      >
        Welcome to CommunityHub
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "var(--muted)",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        A modern community platform built with React where you can
        explore posts, share ideas, and engage with content.
      </p>

      <Link
        to="/posts"
        style={{
          background: "var(--primary)",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Explore Posts
      </Link>

      {/* FEATURE CARDS */}
      <div
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Fast</h3>
          <p>Optimized React performance</p>
        </div>

        <div style={cardStyle}>
          <h3>Interactive</h3>
          <p>Search, like, and create posts</p>
        </div>

        <div style={cardStyle}>
          <h3>Modern</h3>
          <p>Clean UI with reusable components</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "var(--card)",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid var(--border)",
  textAlign: "center",
};

export default Home;