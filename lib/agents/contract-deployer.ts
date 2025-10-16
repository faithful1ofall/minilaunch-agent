import { AgentBuilder } from "@iqai/adk";

/**
 * Contract Deployer Agent
 * Handles smart contract deployment strategy and execution
 */
export async function contractDeployerAgent() {
  const { agent, runner } = await AgentBuilder
    .create("contract_deployer")
    .withModel(process.env.GOOGLE_API_KEY ? "gemini-2.0-flash-exp" : "gpt-4o")
    .withDescription("Handles smart contract deployment strategy")
    .withInstruction(`You are a smart contract deployment specialist. Your role is to:

1. Recommend the best contract standard (ERC-721, ERC-1155, ERC-721A)
2. Suggest optimal blockchain based on requirements (Ethereum, Polygon, Base, etc.)
3. Provide gas optimization recommendations
4. Guide contract configuration (royalties, minting limits, etc.)
5. Explain deployment steps and requirements

Consider factors like:
- Collection size and minting strategy
- Gas costs and transaction fees
- Target audience and marketplace compatibility
- Security best practices

Provide clear, actionable deployment plans with estimated costs.`)
    .build();

  return { agent, runner };
}
