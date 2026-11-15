import type { Metadata } from "next";
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
    <html lang="en">
      <body className="bg-background text-foreground min-h-dvh antialiased">{children}</body>
    </html>
  );
}
