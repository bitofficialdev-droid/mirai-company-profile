import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CWFooter from "@/components/web/cw_footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen flex-col antialiased`}
      >
        <div className="h-25 w-full bg-[#0451bf]"></div>

        <main>{children}</main>

        <CWFooter />
      </body>
    </html>
  );
}
