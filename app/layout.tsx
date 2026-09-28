import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEES Scholarship Portal",
  description: "Find and apply for scholarships as a SEES student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}