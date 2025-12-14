"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // fake summary for demo (VERY OK for hackathon)
    setSummary(
      "This email talks about a meeting update, deadlines, and next steps. Please review the key points and respond if required."
    );
  };

  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <h1>AI Email Summarizer</h1>

      <textarea
        placeholder="Paste your email here..."
        rows={8}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginTop: 10, padding: 10 }}
      />

      <br /><br />

      <button onClick={handleSummarize} style={{ padding: "10px 20px" }}>
        Summarize Email
      </button>

      {summary && (
        <>
          <h3 style={{ marginTop: 30 }}>Summary</h3>
          <div
            style={{
              background: "#111",
              padding: 15,
              borderRadius: 8,
            }}
          >
            {summary}
          </div>
        </>
      )}
    </div>
  );
}