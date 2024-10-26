import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Call GPT",
  description: "Receive call from GPT directly to your phone number",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
