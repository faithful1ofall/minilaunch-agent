/**
 * Validation utilities for NFT data
 */

import type { NFTMetadata, CollectionConfig } from "./types";

/**
 * Validate NFT metadata
 */
export function validateMetadata(metadata: Partial<NFTMetadata>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!metadata.name || metadata.name.trim().length === 0) {
    errors.push("Name is required");
  }

  if (metadata.name && metadata.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  if (!metadata.description || metadata.description.trim().length === 0) {
    errors.push("Description is required");
  }

  if (metadata.description && metadata.description.length > 1000) {
    errors.push("Description must be less than 1000 characters");
  }

  if (!metadata.image || !isValidIPFSUri(metadata.image)) {
    errors.push("Valid image URI is required");
  }

  if (metadata.attributes) {
    metadata.attributes.forEach((attr, index) => {
      if (!attr.trait_type || !attr.value) {
        errors.push(`Attribute ${index + 1} is missing trait_type or value`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validate collection configuration
 */
export function validateCollectionConfig(config: Partial<CollectionConfig>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!config.name || config.name.trim().length === 0) {
    errors.push("Collection name is required");
  }

  if (!config.symbol || config.symbol.trim().length === 0) {
    errors.push("Collection symbol is required");
  }

  if (config.symbol && (config.symbol.length < 2 || config.symbol.length > 10)) {
    errors.push("Symbol must be between 2 and 10 characters");
  }

  if (!config.totalSupply || config.totalSupply < 1) {
    errors.push("Total supply must be at least 1");
  }

  if (config.totalSupply && config.totalSupply > 10000) {
    errors.push("Total supply cannot exceed 10,000");
  }

  if (config.royaltyPercentage !== undefined) {
    if (config.royaltyPercentage < 0 || config.royaltyPercentage > 10) {
      errors.push("Royalty percentage must be between 0 and 10");
    }
  }

  const validBlockchains = ["ethereum", "polygon", "base", "arbitrum"];
  if (config.blockchain && !validBlockchains.includes(config.blockchain)) {
    errors.push("Invalid blockchain selection");
  }

  const validContractTypes = ["ERC721", "ERC1155", "ERC721A"];
  if (config.contractType && !validContractTypes.includes(config.contractType)) {
    errors.push("Invalid contract type");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validate IPFS URI format
 */
export function isValidIPFSUri(uri: string): boolean {
  return uri.startsWith("ipfs://") && uri.length > 7;
}

/**
 * Validate HTTP URL
 */
export function isValidHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}
