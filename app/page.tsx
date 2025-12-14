export default function Home() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <h1>AI Email Summarizer</h1>

      <textarea
        placeholder="Paste your email here..."
        rows={8}
        style={{ width: "100%", marginTop: 10 }}
      />

      <br /><br />

      <button style={{ padding: "10px 20px" }}>
        Summarize Email
      </button>
    </div>
  );
}