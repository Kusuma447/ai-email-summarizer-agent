"use client";

import { useState } from "react";

export default function Home() {
  const [emailText, setEmailText] = useState(
    "From: hr@company.com\nSubject: Interview Invitation\nHi Kusuma, you are shortlisted for the interview scheduled tomorrow at 10 AM."
  );
  const [summary, setSummary] = useState("");

  async function summarizeEmail() {
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: emailText }),
      });

      const data = await res.json();

      if (data.summary) {
        setSummary(data.summary);
      } else {
        setSummary("Error: Could not summarize.");
      }
    } catch (error) {
      console.error(error);
      setSummary("Request failed.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-10">
      <h1 className="text-4xl font-bold">AI Email Summarizer 🚀</h1>

      <textarea
        className="border p-4 w-[500px] h-[150px] text-black"
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded"
        onClick={summarizeEmail}
      >
        Summarize Email ✨
      </button>

      {summary && (
        <div className="border p-4 w-[500px] mt-4 bg-gray-900 text-white">
          <h2 className="font-bold">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}