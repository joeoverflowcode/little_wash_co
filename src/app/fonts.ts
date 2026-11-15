import { Bungee, Montserrat } from "next/font/google";

/** Body and paragraph text. */
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/** Headings (h1 to h6) and display text. Bungee ships a single weight. */
export const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: "swap",
});
