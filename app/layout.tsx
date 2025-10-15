import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniLaunch Agent - AI-Powered NFT Launch Assistant",
  description: "Launch your NFT collection with AI-powered assistance. Generate metadata, deploy contracts, and list on marketplaces - all in one place.",
  keywords: ["NFT", "AI", "Web3", "Blockchain", "Smart Contracts", "IPFS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
