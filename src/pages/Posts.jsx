import { useEffect, useState } from "react";

import PostCard from "../components/Post/PostCard";
import CreatePostForm from "../components/Post/CreatePostForm";
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage/ErrorMessage";
import { usePosts } from "../hooks/usePosts";

function Posts() {
  const { posts, loading, error } = usePosts(20);
  const [search, setSearch] = useState("");

  // Load local posts from storage
  const [localPosts, setLocalPosts] = useState(() => {
    const saved = localStorage.getItem("localPosts");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist local posts
  useEffect(() => {
    localStorage.setItem("localPosts", JSON.stringify(localPosts));
  }, [localPosts]);

  function handleAddPost(newPost) {
    setLocalPosts((prev) => [newPost, ...prev]);
  }

  const allPosts = [...localPosts, ...posts];

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner text="Fetching posts..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Community Posts</h2>

      <CreatePostForm onAddPost={handleAddPost} />

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ display: "grid", gap: "15px" }}>
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;