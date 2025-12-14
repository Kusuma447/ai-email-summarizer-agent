import "./globals.css";

export const metadata = {
  title: "AI Email Summarizer",
  description: "Hackathon project - summarizes emails using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}