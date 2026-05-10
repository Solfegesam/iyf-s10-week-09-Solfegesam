import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* NAVBAR */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--border)",
          padding: "15px 20px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "var(--primary)", margin: 0 }}>
            CommunityHub
          </h2>

          <div style={{ display: "flex", gap: "15px" }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
            <NavLink to="/posts" style={{ textDecoration: "none" }}>
              Posts
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              About
            </NavLink>
          </div>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;