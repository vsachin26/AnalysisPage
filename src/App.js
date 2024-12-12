import React, { useState } from "react";
import AdminPage from "./components/AdminPage";
import AnalysisPage from "./components/AnalysisPage";

function App() {
  const [currentPage, setCurrentPage] = useState("admin"); // Default to admin page
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const navigateTo = (page, playerName = null) => {
    setCurrentPage(page);
    setSelectedPlayer(playerName);
  };

  return (
    <div>
      {currentPage === "admin" && <AdminPage onNavigate={navigateTo} />}
      {currentPage === "analysis" && <AnalysisPage playerName={selectedPlayer} onNavigate={navigateTo} />}
    </div>
  );
}

export default App;
