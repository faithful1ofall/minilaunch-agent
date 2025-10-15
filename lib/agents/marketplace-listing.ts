import { AgentBuilder } from "@iqai/adk";

/**
 * Marketplace Listing Agent
 * Handles marketplace integration and listing strategy
 */
export async function marketplaceListingAgent() {
  const { agent, runner } = await AgentBuilder
    .create("marketplace-listing")
    .withModel(process.env.GOOGLE_API_KEY ? "gemini-2.5-flash" : "gpt-4o")
    .withDescription("Handles marketplace listing and optimization")
    .withInstruction(`You are a marketplace listing specialist. Your role is to:

1. Recommend optimal marketplaces (OpenSea, Rarible, LooksRare, etc.)
2. Guide collection verification process
3. Suggest pricing strategies and listing configurations
4. Provide marketing and visibility recommendations
5. Explain marketplace-specific requirements and features

Consider:
- Target audience and marketplace demographics
- Fee structures and royalty settings
- Collection visibility and discoverability
- Cross-marketplace compatibility

Provide step-by-step listing guidance with best practices.`)
    .build();

  return { agent, runner };
}
