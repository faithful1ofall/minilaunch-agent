/**
 * NFT Smart Contract Templates
 * Standard ERC-721 and ERC-1155 contract ABIs
 */

export const ERC721_MINIMAL_ABI = [
  // Constructor
  "constructor(string name, string symbol)",
  
  // Standard ERC-721 functions
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address owner) view returns (uint256)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  
  // Minting
  "function mint(address to, string uri) returns (uint256)",
  "function safeMint(address to, string uri) returns (uint256)",
  
  // Transfer
  "function transferFrom(address from, address to, uint256 tokenId)",
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  
  // Approval
  "function approve(address to, uint256 tokenId)",
  "function setApprovalForAll(address operator, bool approved)",
  "function getApproved(uint256 tokenId) view returns (address)",
  "function isApprovedForAll(address owner, address operator) view returns (bool)",
  
  // Events
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
];

export const ERC1155_MINIMAL_ABI = [
  // Constructor
  "constructor(string uri)",
  
  // Standard ERC-1155 functions
  "function uri(uint256 id) view returns (string)",
  "function balanceOf(address account, uint256 id) view returns (uint256)",
  "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
  
  // Minting
  "function mint(address to, uint256 id, uint256 amount, bytes data)",
  "function mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data)",
  
  // Transfer
  "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
  "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)",
  
  // Approval
  "function setApprovalForAll(address operator, bool approved)",
  "function isApprovedForAll(address account, address operator) view returns (bool)",
  
  // Events
  "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
  "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
  "event ApprovalForAll(address indexed account, address indexed operator, bool approved)",
  "event URI(string value, uint256 indexed id)",
];

/**
 * Contract deployment bytecode templates
 * Note: These are placeholders. In production, use actual compiled contract bytecode
 */
export const CONTRACT_BYTECODE = {
  ERC721: "0x608060405234801561001057600080fd5b50...", // Placeholder
  ERC1155: "0x608060405234801561001057600080fd5b50...", // Placeholder
  ERC721A: "0x608060405234801561001057600080fd5b50...", // Placeholder
};

/**
 * Get contract ABI by type
 */
export function getContractABI(contractType: "ERC721" | "ERC1155" | "ERC721A"): string[] {
  switch (contractType) {
    case "ERC721":
    case "ERC721A":
      return ERC721_MINIMAL_ABI;
    case "ERC1155":
      return ERC1155_MINIMAL_ABI;
    default:
      return ERC721_MINIMAL_ABI;
  }
}

/**
 * Get contract bytecode by type
 */
export function getContractBytecode(contractType: "ERC721" | "ERC1155" | "ERC721A"): string {
  return CONTRACT_BYTECODE[contractType] || CONTRACT_BYTECODE.ERC721;
}
