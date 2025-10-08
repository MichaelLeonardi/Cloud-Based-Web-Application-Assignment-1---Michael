"use client";

import { useState, useEffect } from "react";

export default function TabsGenerator() {
  const [tabs, setTabs] = useState<{ name: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [tabName, setTabName] = useState("");
  const [outputCode, setOutputCode] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tabs");
    if (saved) setTabs(JSON.parse(saved));
    localStorage.setItem("lastVisited", "Tabs");
  }, []);

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  const addTab = () => {
    if (tabs.length >= 15) return alert("You can only create up to 15 tabs.");
    if (!tabName.trim()) return alert("Tab name cannot be empty.");

    const newTabs = [...tabs, { name: tabName, content: "" }];
    setTabs(newTabs);
    setTabName("");
    setActiveTab(newTabs.length - 1);
  };

  const deleteTab = (index: number) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (activeTab >= newTabs.length) setActiveTab(newTabs.length - 1);
  };

  const renameTab = (index: number) => {
    const newName = prompt("Enter new name for this tab:", tabs[index].name);
    if (newName) {
      const newTabs = [...tabs];
      newTabs[index].name = newName;
      setTabs(newTabs);
    }
  };

  const updateContent = (text: string) => {
    const newTabs = [...tabs];
    newTabs[activeTab].content = text;
    setTabs(newTabs);
  };

  const generateOutput = () => {
    let html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Generated Tabs</title>
<style>
  body { font-family: Arial, sans-serif; margin: 30px; }
  .tab-buttons { display: flex; gap: 8px; margin-bottom: 20px; }
  button { padding: 8px 12px; border: 1px solid #000; background: #f0f0f0; cursor: pointer; }
  button.active { background: #000; color: #fff; }
  .tab-content { border: 1px solid #000; padding: 10px; border-radius: 4px; min-height: 100px; }
</style>
</head>
<body>
<h1>Generated Tabs Website</h1>
<div class="tab-buttons">
${tabs
  .map(
    (tab, i) =>
      `<button onclick="showTab(${i})" id="tabBtn${i}" ${
        i === 0 ? 'class="active"' : ""
      }>${tab.name}</button>`
  )
  .join("\n")}
</div>
${tabs
  .map(
    (tab, i) =>
      `<div class="tab-content" id="tab${i}" style="display:${
        i === 0 ? "block" : "none"
      }">${tab.content}</div>`
  )
  .join("\n")}
<script>
  function showTab(index) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-buttons button');
    contents.forEach((c, i) => {
      c.style.display = i === index ? 'block' : 'none';
      buttons[i].classList.toggle('active', i === index);
    });
  }
</script>
</body>
</html>`;
    setOutputCode(html);
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <h1>Tabs Generator</h1>
      <p>
        Create up to 15 tabs, edit each tab’s name and content, then generate HTML
        code that recreates your tabbed website.
      </p>

      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <input
          type="text"
          value={tabName}
          onChange={(e) => setTabName(e.target.value)}
          placeholder="Enter new tab name"
          style={{
            padding: "6px 8px",
            border: "1px solid var(--border-color)",
            borderRadius: 4,
            marginRight: 8,
          }}
        />
        <button
          onClick={addTab}
          style={{
            padding: "6px 12px",
            background: "var(--foreground)",
            color: "var(--background)",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add Tab
        </button>
      </div>

      {/* Tab buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "6px 10px",
              borderRadius: 4,
              cursor: "pointer",
              background:
                index === activeTab ? "var(--foreground)" : "transparent",
              color:
                index === activeTab ? "var(--background)" : "var(--foreground)",
              border: "1px solid var(--border-color)",
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tabs.length > 0 && (
        <div
          style={{
            border: "1px solid var(--border-color)",
            borderRadius: 4,
            padding: 12,
            marginBottom: 20,
          }}
        >
          <h3>{tabs[activeTab].name}</h3>
          <textarea
            value={tabs[activeTab].content}
            onChange={(e) => updateContent(e.target.value)}
            placeholder="Type your content here..."
            style={{
              width: "100%",
              height: 150,
              border: "1px solid var(--border-color)",
              borderRadius: 4,
              padding: 8,
              fontFamily: "monospace",
              fontSize: 14,
            }}
          />
          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => renameTab(activeTab)}
              style={{
                marginRight: 6,
                padding: "6px 10px",
                border: "1px solid var(--border-color)",
                borderRadius: 4,
                background: "none",
                cursor: "pointer",
                color: "var(--foreground)",
              }}
            >
              Rename
            </button>
            <button
              onClick={() => deleteTab(activeTab)}
              style={{
                padding: "6px 10px",
                border: "1px solid var(--border-color)",
                borderRadius: 4,
                background: "none",
                cursor: "pointer",
                color: "var(--foreground)",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Generate Output */}
      {tabs.length > 0 && (
        <div>
          <button
            onClick={generateOutput}
            style={{
              padding: "6px 12px",
              background: "var(--foreground)",
              color: "var(--background)",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Generate Output
          </button>
        </div>
      )}

      {outputCode && (
        <div style={{ marginTop: 20 }}>
          <h2>Generated HTML Output</h2>
          <textarea
            readOnly
            value={outputCode}
            style={{
              width: "100%",
              height: 250,
              padding: 10,
              border: "1px solid var(--border-color)",
              borderRadius: 4,
              fontFamily: "monospace",
              fontSize: 14,
            }}
          />
        </div>
      )}
    </div>
  );
}
