import { NextRequest, NextResponse } from "next/server";
import type { MarketplaceListing } from "@/lib/utils/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/marketplace
 * Create marketplace listing
 */
export async function POST(request: NextRequest) {
  try {
    const { contractAddress, blockchain, marketplace } = await request.json();

    if (!contractAddress || !blockchain) {
      return NextResponse.json(
        { error: "Contract address and blockchain are required" },
        { status: 400 }
      );
    }

    // Generate marketplace URLs based on blockchain and marketplace
    const listing = generateMarketplaceListing(
      contractAddress,
      blockchain,
      marketplace || "opensea"
    );

    return NextResponse.json({
      success: true,
      listing,
      message: "Marketplace listing created",
    });
  } catch (error) {
    console.error("Marketplace listing error:", error);
    return NextResponse.json(
      { error: "Failed to create listing", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/marketplace?address=0x...&blockchain=ethereum
 * Get marketplace information for a collection
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const address = searchParams.get("address");
    const blockchain = searchParams.get("blockchain") || "ethereum";

    if (!address) {
      return NextResponse.json(
        { error: "Contract address is required" },
        { status: 400 }
      );
    }

    // Generate listings for all major marketplaces
    const listings = [
      generateMarketplaceListing(address, blockchain, "opensea"),
      generateMarketplaceListing(address, blockchain, "rarible"),
      generateMarketplaceListing(address, blockchain, "looksrare"),
    ];

    return NextResponse.json({
      success: true,
      contractAddress: address,
      blockchain,
      listings,
    });
  } catch (error) {
    console.error("Marketplace info error:", error);
    return NextResponse.json(
      { error: "Failed to get marketplace info", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * Generate marketplace listing information
 */
function generateMarketplaceListing(
  contractAddress: string,
  blockchain: string,
  marketplace: string
): MarketplaceListing {
  interface MarketplaceUrls {
    [blockchain: string]: string;
  }

  const baseUrls: Record<string, MarketplaceUrls> = {
    opensea: {
      ethereum: "https://opensea.io/assets/ethereum",
      polygon: "https://opensea.io/assets/matic",
      base: "https://opensea.io/assets/base",
      arbitrum: "https://opensea.io/assets/arbitrum",
    },
    rarible: {
      ethereum: "https://rarible.com/collection/ethereum",
      polygon: "https://rarible.com/collection/polygon",
    },
    looksrare: {
      ethereum: "https://looksrare.org/collections",
    },
  };

  const baseUrl = baseUrls[marketplace]?.[blockchain];
  const collectionUrl = baseUrl
    ? `${baseUrl}/${contractAddress}`
    : `https://opensea.io/assets/${blockchain}/${contractAddress}`;

  return {
    marketplace: marketplace as "opensea" | "rarible" | "looksrare",
    collectionUrl,
    verified: false,
  };
}
