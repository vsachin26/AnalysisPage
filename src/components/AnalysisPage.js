import React from "react";

function AnalysisPage({ playerName, onNavigate }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F9E79F", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#5DADE2", padding: "10px 20px", color: "#fff", textAlign: "center" }}>
        <h1>Analysis Page</h1>
      </header>
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#2C3E50" }}>Analysis for {playerName}</h2>
        <p style={{ color: "#34495E" }}>
          Here is some analysis data about <b>{playerName}</b>. More insights can be added here.
        </p>
        <button
          onClick={() => onNavigate("admin")}
          style={{
            backgroundColor: "#5DADE2",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default AnalysisPage;
