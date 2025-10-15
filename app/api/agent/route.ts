import { NextRequest, NextResponse } from "next/server";
import { createCoordinatorAgent, createNFTLaunchAgent } from "@/lib/agents/nft-launch-agent";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/agent
 * Main agent endpoint for chat interactions
 */
export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, action } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Create coordinator agent
    const { runner } = await createCoordinatorAgent();

    // Process message
    const response = await runner.ask(message);

    return NextResponse.json({
      response: response || "I'm here to help you launch your NFT collection!",
      sessionId: sessionId || `session-${Date.now()}`,
      action: action || "chat",
    });
  } catch (error) {
    console.error("Agent error:", error);
    return NextResponse.json(
      { error: "Failed to process request", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * POST /api/agent/launch
 * Execute full NFT launch workflow
 */
export async function PUT(request: NextRequest) {
  try {
    const { collectionData, sessionId } = await request.json();

    if (!collectionData) {
      return NextResponse.json(
        { error: "Collection data is required" },
        { status: 400 }
      );
    }

    // Create NFT launch workflow agent
    const { runner } = await createNFTLaunchAgent();

    // Execute workflow
    const result = await runner.ask(JSON.stringify(collectionData));

    return NextResponse.json({
      success: true,
      result: result || "Launch workflow initiated",
      sessionId: sessionId || `launch-${Date.now()}`,
    });
  } catch (error) {
    console.error("Launch workflow error:", error);
    return NextResponse.json(
      { error: "Failed to execute launch workflow", details: String(error) },
      { status: 500 }
    );
  }
}
