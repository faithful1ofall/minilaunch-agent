import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "MiniLaunch Agent - AI-Powered NFT Launch Assistant",
  description: "Launch your NFT collection with AI-powered assistance. Generate metadata, deploy contracts, and list on marketplaces - all in one place.",
  keywords: ["NFT", "AI", "Web3", "Blockchain", "Smart Contracts", "IPFS"],
  authors: [{ name: "MiniLaunch Team" }],
  openGraph: {
    title: "MiniLaunch Agent - AI-Powered NFT Launch Assistant",
    description: "Launch your NFT collection with AI-powered assistance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniLaunch Agent",
    description: "AI-Powered NFT Launch Assistant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
