import { NextRequest, NextResponse } from "next/server";
import { deployNFTContract, estimateDeploymentCost } from "@/lib/web3/contract-deployer";
import type { CollectionConfig } from "@/lib/utils/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/deploy
 * Deploy NFT smart contract
 */
export async function POST(request: NextRequest) {
  try {
    const config: CollectionConfig = await request.json();

    // Validate configuration
    if (!config.name || !config.symbol || !config.blockchain) {
      return NextResponse.json(
        { error: "Name, symbol, and blockchain are required" },
        { status: 400 }
      );
    }

    // Deploy contract
    const deployment = await deployNFTContract(config);

    return NextResponse.json({
      success: true,
      deployment,
      message: "Contract deployed successfully",
    });
  } catch (error) {
    console.error("Deployment error:", error);
    return NextResponse.json(
      { error: "Failed to deploy contract", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/deploy/estimate?blockchain=ethereum
 * Estimate deployment costs
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const blockchain = searchParams.get("blockchain") || "ethereum";

    const estimate = await estimateDeploymentCost(blockchain);

    return NextResponse.json({
      success: true,
      blockchain,
      estimate,
    });
  } catch (error) {
    console.error("Estimation error:", error);
    return NextResponse.json(
      { error: "Failed to estimate costs", details: String(error) },
      { status: 500 }
    );
  }
}
