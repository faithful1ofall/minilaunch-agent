import { AgentBuilder } from "@iqai/adk";

/**
 * Metadata Generator Agent
 * Generates NFT metadata following OpenSea standards
 */
export async function metadataGeneratorAgent() {
  const { agent, runner } = await AgentBuilder
    .create("metadata_generator")
    .withModel(process.env.GOOGLE_API_KEY ? "gemini-2.0-flash-exp" : "gpt-4o")
    .withDescription("Generates NFT metadata following industry standards")
    .withInstruction(`You are an NFT metadata specialist. Your role is to:

1. Generate compliant NFT metadata following OpenSea and ERC-721/ERC-1155 standards
2. Create compelling descriptions that highlight unique features
3. Structure attributes/traits properly for marketplace display
4. Ensure all required fields are present (name, description, image, attributes)
5. Suggest optimal metadata structure based on collection type

Output metadata in JSON format following this structure:
{
  "name": "NFT Name",
  "description": "Detailed description",
  "image": "ipfs://...",
  "attributes": [
    {"trait_type": "Trait Name", "value": "Trait Value"}
  ],
  "external_url": "https://...",
  "background_color": "FFFFFF"
}

Be creative but professional. Ensure metadata is marketplace-ready.`)
    .build();

  return { agent, runner };
}
