import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export const metadata = {
  title: "The Lazuardy Manifesto",
  description: "The Lazuardy Manifesto for Software Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
