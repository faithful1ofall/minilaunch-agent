import type { NFTMetadata } from "@/lib/utils/types";

/**
 * Upload metadata to IPFS via Pinata
 */
export async function uploadMetadataToIPFS(
  metadata: NFTMetadata
): Promise<string> {
  try {
    const pinataJWT = process.env.PINATA_JWT;

    if (!pinataJWT) {
      // Return mock IPFS hash for demo
      return `ipfs://Qm${generateMockHash()}`;
    }

    const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pinataJWT}`,
      },
      body: JSON.stringify({
        pinataContent: metadata,
        pinataMetadata: {
          name: `${metadata.name}-metadata`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Pinata upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return `ipfs://${data.IpfsHash}`;
  } catch (error) {
    console.error("IPFS upload error:", error);
    // Return mock hash for demo
    return `ipfs://Qm${generateMockHash()}`;
  }
}

/**
 * Upload image file to IPFS
 */
export async function uploadImageToIPFS(file: File): Promise<string> {
  try {
    const pinataJWT = process.env.PINATA_JWT;

    if (!pinataJWT) {
      return `ipfs://Qm${generateMockHash()}`;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pinataJWT}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Pinata upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return `ipfs://${data.IpfsHash}`;
  } catch (error) {
    console.error("Image upload error:", error);
    return `ipfs://Qm${generateMockHash()}`;
  }
}

/**
 * Generate mock IPFS hash for demo purposes
 */
function generateMockHash(): string {
  const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let hash = "";
  for (let i = 0; i < 46; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hash;
}
