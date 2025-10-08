"use client";
import { useEffect } from "react";

export default function TabsPage() {
  useEffect(() => {
    localStorage.setItem("lastVisited", "Tabs");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Tabs Generator Project</h1>
      <p>
        This is your main page — the “Tabs” page. Use this as the base for your
        generator and output feature later.
      </p>

      <ul>
        <li>Dark / Light mode toggle</li>
        <li>Hamburger menu navigation</li>
        <li>Footer and consistent UI styling</li>
      </ul>
    </div>
  );
}
