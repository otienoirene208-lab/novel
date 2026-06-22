import React, { useState } from "react";

const DarkMode = () => {

  const [dark, setDark] = useState(false);


  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };


  return (
    <button 
      onClick={toggleDarkMode}
      className="btn btn-dark rounded-pill"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};


export default DarkMode;