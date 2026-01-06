import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mirai Softnet Technology",
    template: "%s | Mirai Softnet Technology",
  },
  description:
    "Your reliable IT partner delivering innovative, secure, and scalable digital solutions for modern businesses.",

  // TODO: change this!
  // keywords: [
  //   "IT Solution",
  //   "Software Development",
  //   "Digital Transformation",
  //   "Technology Partner",
  //   "Mirai Softnet Technology",
  // ],

  authors: [{ name: "Mirai Softnet Technology" }],
  // metadataBase: new URL("https://miraisoftnet.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
