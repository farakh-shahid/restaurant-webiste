import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "King Karahi Tawa - Authentic Pakistani Cuisine",
  description: "Experience the finest Pakistani cuisine at King Karahi Tawa in Manchester. Authentic karahi, tawa dishes, and traditional flavors in a welcoming atmosphere.",
  keywords: "King Karahi Tawa, Pakistani, Restaurant, Karahi, Tawa, Manchester, Levenshulme, Authentic, Halal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
