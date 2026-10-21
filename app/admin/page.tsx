"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS script secara dinamis di browser
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#1e293b", color: "#fff", fontFamily: "sans-serif" }}>
      <h2>Loading Content Manager...</h2>
    </div>
  );
}