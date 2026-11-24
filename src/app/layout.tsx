import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}