import type { Metadata } from "next";
import "../styles/globals.css";
import DigitalUniverse from "./components/DigitalUniverse";
import PageReveal from "./components/PageReveal";

export const metadata: Metadata = {
  title: "VyreReach | Digital Marketing Agency",
  description: "Building Digital Product, Brand and Experience. We transform ambitious ideas into seamless, scalable products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        <DigitalUniverse />
        <PageReveal>
          {children}
        </PageReveal>
      </body>
    </html>
  );
}
