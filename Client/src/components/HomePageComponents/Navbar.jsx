import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ padding: "1rem", background: "#f8f8f8" }}>
      <button
        onClick={() => navigate("/dreampage")}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "6px",
          background: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Subconcious mind
      </button>
    </nav>
  );
}

export default Navbar;
