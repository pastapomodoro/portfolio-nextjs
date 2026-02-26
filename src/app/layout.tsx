import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eugenio Bellini | Portfolio",
  description: "Graphic Designer, Art Director & UX/UI Enthusiast based in Verona, Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <NavBar
          items={[
            { name: "Home", url: "/#home", iconKey: "home" },
            { name: "Projects", url: "/#projects", iconKey: "briefcase" },
            { name: "About", url: "/#about", iconKey: "user" },
            { name: "Resume", url: "/resume", iconKey: "fileText" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
