import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ModalProvider } from "@/providers/ModalProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CollaboraHub",
  description:
    "CollaboraHub is a cutting-edge collaborative platform designed to empower teams and individuals to work together seamlessly and efficiently.",
  authors: [{ name: "LiRiK" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "collaboration",
    "platform",
    "real-time",
    "document editing",
    "communication",
    "project management",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CollaboraHub",
    description:
      "CollaboraHub is a cutting-edge collaborative platform designed to empower teams and individuals to work together seamlessly and efficiently.",
    url: "https://collabora-hub.vercel.app/",
    siteName: "CollaboraHub",
    images: [
      {
        url: "https://collabora-hub.vercel.app/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          <main className="overflow-x-hidden">{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
