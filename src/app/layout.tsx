import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CWFooter from "@/components/web/cw_footer";
import CWNavbar from "@/components/web/cw_navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Bit Hrms",
    template: "%s | Bit Hrms",
  },
  description:
    "Bit HRMS is a comprehensive Human Resource Management System designed to streamline and automate HR processes, including employee management, payroll, recruitment, performance management, and more. Our cloud-based solution offers a user-friendly interface and powerful features to help businesses of all sizes manage their workforce efficiently and effectively.",

  keywords: [
    "IT solutions",
    "HRMS software",
    "Bit",
    "Bit HRMS",
    "Bit hrms",
    "Human Resource Management System",
    "HR software",
    "Employee management",
    "Payroll software",
    "Recruitment software",
    "Performance management",
    "Time and attendance tracking",
    "Leave management",
    "Employee self-service portal",
    "HR analytics",
    "Cloud-based HRMS",
    "On-premises HRMS",
    "HRMS implementation",
    "HRMS support",
  ],

  authors: [{ name: "Mirai Softnet Technology" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} flex min-h-screen flex-col antialiased`}
      >
        <CWNavbar />

        {/* <div className="h-40 w-full bg-[#0451bf]"></div> */}

        <main className="flex grow">{children}</main>

        <CWFooter />
      </body>
    </html>
  );
}
