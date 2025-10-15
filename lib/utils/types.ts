/**
 * Type definitions for MiniLaunch Agent
 */

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
  external_url?: string;
  background_color?: string;
  animation_url?: string;
}

export interface CollectionConfig {
  name: string;
  symbol: string;
  description: string;
  totalSupply: number;
  royaltyPercentage: number;
  blockchain: "ethereum" | "polygon" | "base" | "arbitrum";
  contractType: "ERC721" | "ERC1155" | "ERC721A";
}

export interface DeploymentResult {
  contractAddress: string;
  transactionHash: string;
  blockchain: string;
  gasUsed: string;
  deploymentCost: string;
}

export interface MarketplaceListing {
  marketplace: "opensea" | "rarible" | "looksrare";
  collectionUrl: string;
  verified: boolean;
  floorPrice?: string;
}

export interface LaunchStatus {
  stage: "metadata" | "deployment" | "listing" | "complete";
  progress: number;
  currentStep: string;
  metadata?: NFTMetadata;
  deployment?: DeploymentResult;
  listings?: MarketplaceListing[];
  errors?: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  metadata?: {
    stage?: string;
    status?: LaunchStatus;
  };
}
