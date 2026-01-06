import "./globals.css";

export const metadata = {
  title: "Mirai Company Profile",
  description: "Innovative Solutions for Your Business",
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
