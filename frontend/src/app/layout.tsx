import type { Metadata } from "next";
import { Yatra_One, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AmbientAudioProvider } from "@/components/layout/AmbientAudioProvider";
import { TempleGateSplash } from "@/components/landing/TempleGateSplash";

const yatraOne = Yatra_One({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mangalmitra | Sacred Traditions Delivered to Your Doorstep",
  description:
    "Mangalmitra is a puja samagri shop and spiritual experience platform — shop ritual essentials, learn any puja, explore Vedic wisdom, and meditate, all in one sacred space.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yatraOne.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="paper-grain min-h-full flex flex-col bg-ivory-50 text-sandalwood-900">
        <AmbientAudioProvider>
          <TempleGateSplash />
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </AmbientAudioProvider>
      </body>
    </html>
  );
}
