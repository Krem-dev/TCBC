import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TCBC | A Community of Faith, Hope, and Love",
  description:
    "Join us at TCBC as we grow together in Christ and serve our community. Experience worship, fellowship, and spiritual growth.",
  keywords: ["church", "TCBC", "worship", "community", "faith", "sermons", "events"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-aeonik antialiased`}>
        <NavBar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
