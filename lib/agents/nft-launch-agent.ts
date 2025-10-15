import { AgentBuilder } from "@iqai/adk";

/**
 * Main NFT Launch Agent
 * Orchestrates the complete NFT launch workflow:
 * 1. Generate metadata
 * 2. Deploy smart contract
 * 3. List on marketplace
 */
export async function createNFTLaunchAgent() {
  const { agent, runner } = await AgentBuilder
    .create("nft-launch-orchestrator")
    .withModel(process.env.GOOGLE_API_KEY ? "gemini-2.5-flash" : "gpt-4o")
    .withDescription("End-to-end NFT launch assistant")
    .withInstruction(`You are an NFT launch orchestrator. Guide users through:
1. Metadata generation (name, description, traits, IPFS upload)
2. Smart contract deployment (blockchain selection, gas estimation)
3. Marketplace listing (OpenSea, Rarible integration)

Provide step-by-step guidance and clear status updates.`)
    .build();

  return { agent, runner };
}

/**
 * Coordinator Agent
 * Handles user interaction and delegates to the workflow
 */
export async function createCoordinatorAgent() {
  const { agent, runner } = await AgentBuilder
    .create("nft-launch-coordinator")
    .withModel(process.env.GOOGLE_API_KEY ? "gemini-2.5-flash" : "gpt-4o")
    .withDescription("Coordinates NFT launch workflow and user interaction")
    .withInstruction(`You are an expert NFT launch assistant. Your role is to:
    
1. Understand user requirements for their NFT collection
2. Guide them through the launch process step by step
3. Collect necessary information (collection name, description, artwork details, blockchain choice, etc.)
4. Coordinate with specialized agents to execute the launch
5. Provide clear status updates and next steps

Be professional, clear, and helpful. Ask clarifying questions when needed.
Always explain what's happening at each stage of the process.`)
    .build();

  return { agent, runner };
}
