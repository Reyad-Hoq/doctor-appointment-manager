import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/component/common/Navbar";
import Footer from "@/component/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppointment",
  description: "Book doctor appointments online with ease. Find experienced doctors, schedule visits, manage appointments, and receive healthcare services conveniently through DocAppoint.",
  keywords: [
    "doctor appointment",
    "online doctor booking",
    "healthcare",
    "medical appointment",
    "doctor consultation",
    "hospital booking",
    "health services",
    "DocAppoint",
  ],

  authors: [{ name: "DocAppoint Team" }],
  creator: "DocAppoint",
  publisher: "DocAppoint",

  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
