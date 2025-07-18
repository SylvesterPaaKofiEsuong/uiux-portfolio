import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  // ...other components if needed
} from "@/components/ui/resizable-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nana Agyeman-Badu",
  description: "Nana Agyeman-Badu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={[
              { name: "About Me!", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Testimonials", link: "#testimonials" },
              { name: "Contact", link: "#contact" },
            ]} />
            <NavbarButton href="#contact">Contact Me</NavbarButton>
          </NavBody>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
