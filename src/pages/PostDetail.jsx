import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage/ErrorMessage";

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post.");
        }

        const data = await response.json();

        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return <LoadingSpinner text="Loading post..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <Link
        to="/posts"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "blue",
        }}
      >
        ← Back to Posts
      </Link>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            textTransform: "capitalize",
          }}
        >
          {post.title}
        </h2>

        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetail;