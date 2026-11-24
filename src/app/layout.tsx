import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowSync | Project Management",
  description:
    "Manage projects and collaborate with your team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}