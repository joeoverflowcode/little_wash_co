import type { Metadata } from "next";
import { activeTheme } from "@/config/theme";
import { bungee, montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Little Wash Co",
    template: "%s | Little Wash Co",
  },
  description: "Sun-dried hockey equipment cleaning in Dallas, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={activeTheme}
      className={`${montserrat.variable} ${bungee.variable}`}
    >
      <body className="bg-background text-foreground min-h-dvh antialiased">{children}</body>
    </html>
  );
}
