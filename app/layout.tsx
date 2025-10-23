import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "15-Day Elite Study Accelerator",
  description:
    "Intensive 15-day mastery plan fusing Karma Akabane's audacity with Ayanokoji Kiyotaka's precision for Linux OS and ASP.NET with C#."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
