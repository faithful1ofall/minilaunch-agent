import { ethers } from "ethers";

/**
 * Wallet utility functions for Web3 operations
 */

export interface WalletInfo {
  address: string;
  balance: string;
  network: string;
}

/**
 * Get wallet information
 */
export async function getWalletInfo(
  privateKey: string,
  rpcUrl: string
): Promise<WalletInfo> {
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    const balance = await provider.getBalance(wallet.address);
    const network = await provider.getNetwork();

    return {
      address: wallet.address,
      balance: ethers.formatEther(balance),
      network: network.name,
    };
  } catch (error) {
    console.error("Wallet info error:", error);
    throw new Error(`Failed to get wallet info: ${error}`);
  }
}

/**
 * Validate Ethereum address
 */
export function isValidAddress(address: string): boolean {
  return ethers.isAddress(address);
}

/**
 * Format address for display (0x1234...5678)
 */
export function formatAddress(address: string, chars: number = 4): string {
  if (!isValidAddress(address)) return address;
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Get current gas price
 */
export async function getCurrentGasPrice(rpcUrl: string): Promise<string> {
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const feeData = await provider.getFeeData();
    
    if (feeData.gasPrice) {
      return ethers.formatUnits(feeData.gasPrice, "gwei");
    }
    
    return "0";
  } catch (error) {
    console.error("Gas price error:", error);
    return "0";
  }
}

/**
 * Estimate transaction cost
 */
export async function estimateTransactionCost(
  rpcUrl: string,
  gasLimit: number
): Promise<{ gasCost: string; gasCostUsd: string }> {
  try {
    const gasPriceGwei = await getCurrentGasPrice(rpcUrl);
    const gasCostEth = (parseFloat(gasPriceGwei) * gasLimit) / 1e9;
    
    // Mock ETH price - in production, fetch from price oracle
    const ethPriceUsd = 3000;
    const gasCostUsd = gasCostEth * ethPriceUsd;

    return {
      gasCost: gasCostEth.toFixed(6),
      gasCostUsd: gasCostUsd.toFixed(2),
    };
  } catch (error) {
    console.error("Cost estimation error:", error);
    return { gasCost: "0", gasCostUsd: "0" };
  }
}
