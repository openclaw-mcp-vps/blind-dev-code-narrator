import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Narrator — AI Audio Descriptions for Visually Impaired Developers",
  description: "AI-powered code narrator that converts code structure, logic flow, and changes into detailed audio descriptions and spatial navigation for visually impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c8db3027-0a4d-48f1-ae00-94ccb5ca2d78"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
