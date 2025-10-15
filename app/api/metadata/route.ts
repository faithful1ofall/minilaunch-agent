import { NextRequest, NextResponse } from "next/server";
import { uploadMetadataToIPFS } from "@/lib/web3/ipfs-uploader";
import type { NFTMetadata } from "@/lib/utils/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/metadata
 * Generate and upload NFT metadata
 */
export async function POST(request: NextRequest) {
  try {
    const metadata: NFTMetadata = await request.json();

    // Validate metadata
    if (!metadata.name || !metadata.description) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      );
    }

    // Upload to IPFS
    const ipfsUri = await uploadMetadataToIPFS(metadata);

    return NextResponse.json({
      success: true,
      metadata,
      ipfsUri,
      message: "Metadata uploaded successfully",
    });
  } catch (error) {
    console.error("Metadata upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload metadata", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/metadata?uri=ipfs://...
 * Retrieve metadata from IPFS
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const uri = searchParams.get("uri");

    if (!uri) {
      return NextResponse.json(
        { error: "URI parameter is required" },
        { status: 400 }
      );
    }

    // Convert IPFS URI to HTTP gateway URL
    const httpUrl = uri.replace("ipfs://", "https://ipfs.io/ipfs/");

    // Fetch metadata
    const response = await fetch(httpUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch metadata from IPFS");
    }

    const metadata = await response.json();

    return NextResponse.json({
      success: true,
      metadata,
      uri,
    });
  } catch (error) {
    console.error("Metadata retrieval error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve metadata", details: String(error) },
      { status: 500 }
    );
  }
}
