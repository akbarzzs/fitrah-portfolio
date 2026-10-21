"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Memuat script Decap CMS secara langsung di browser
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    document.head.appendChild(script);

    const cmsScript = document.createElement("script");
    cmsScript.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    document.body.appendChild(cmsScript);
  }, []);

  return null;
}