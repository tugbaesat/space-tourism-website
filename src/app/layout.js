import { barlowCondensed } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Space Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlowCondensed.className}>{children}</body>
    </html>
  );
}
