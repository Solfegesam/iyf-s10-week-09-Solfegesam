import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postsApi";

export function usePosts(limit = 12) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchPosts();

        const cleaned = data.slice(0, limit).map((post) => ({
          ...post,
          title:
            post.title.charAt(0).toUpperCase() + post.title.slice(1),
          body:
            post.body.charAt(0).toUpperCase() + post.body.slice(1),
        }));

        setPosts(cleaned);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [limit]);

  return { posts, loading, error };
}