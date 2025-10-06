"use client";

import { useEffect } from "react";

export default function AboutPage() {
  const studentName = "Michael Leonardi";
  const studentNumber = "22586733";
  const videoId = "YuibCvijetw"; // YouTube video ID

  useEffect(() => {
    try {
      localStorage.setItem("lastVisited", "About");
    } catch {
      // ignore if localStorage not available
    }
  }, []);

  return (
    <div style={{ padding: "20px 0", lineHeight: 1.6 }}>
      <h1 style={{ marginBottom: 12 }}>About This Project</h1>

      <section style={{ marginBottom: 16 }}>
        <p>
          <strong>Name:</strong> {studentName}
        </p>
        <p>
          <strong>Student ID:</strong> {studentNumber}
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <p>
          This project was developed as part of the Tabs Generator assignment. It
          demonstrates the use of React components and Next.js features to create
          an interactive web application with the following elements:
        </p>
        <ul style={{ marginTop: 8 }}>
          <li>Header, footer, and hamburger menu navigation</li>
          <li>Light and dark mode themes (stored in localStorage)</li>
          <li>Tabs editor: add, remove, and edit up to 15 tabs</li>
          <li>Tabs saved in localStorage for persistence</li>
          <li>Output generator that creates standalone HTML with inline CSS</li>
        </ul>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ marginBottom: 8 }}>Project Walkthrough Video</h2>
        <p style={{ marginBottom: 12 }}>
          The video below demonstrates all key features — creating and editing tabs,
          switching between light and dark mode, and generating inline CSS HTML outputs.
        </p>

        <div
          style={{
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid var(--border-color)",
          }}
        >
          <iframe
            width="100%"
            height="420"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Tabs Generator Project Walkthrough - Michael Leonardi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", border: "none" }}
          ></iframe>
        </div>
      </section>
    </div>
  );
}
