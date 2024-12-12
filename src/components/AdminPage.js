import React from "react";
import backgroundImage from "../assets/background-image.png";

const players = [
  { id: 1, name: "Player 1" },
  { id: 2, name: "Player 2" },
  { id: 3, name: "Player 3" },
  { id: 4, name: "Player 4" },
];

function AdminPage({ onNavigate }) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "80%",
          maxWidth: "700px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            position: "relative",
            backgroundColor: "#5DADE2",
            padding: "10px 20px",
            color: "#fff",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <h1>Admin Panel</h1>
        </header>

        <div style={{ padding: "20px" }}>
          <h2
            style={{
              color: "#2C3E50",
              fontSize: "18px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Player Management
          </h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#5DADE2", color: "#fff" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Player</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr
                  key={player.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F7F9F9" : "#EBF5FB",
                    borderBottom: "1px solid #ddd",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#D6EAF8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#F7F9F9" : "#EBF5FB")
                  }
                >
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "14px",
                      color: "#34495E",
                    }}
                  >
                    {player.name}
                  </td>
                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() => onNavigate("analysis", player.name)}
                      style={{
                        backgroundColor: "#58D68D",
                        color: "#fff",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Show Analysis
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
