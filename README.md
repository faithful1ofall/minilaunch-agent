# 🚀 MiniLaunch Agent

**AI-Powered NFT Launch Assistant** built with Next.js, ADK-TS, and Web3 technologies.

MiniLaunch Agent is a production-ready, full-stack application that leverages AI to guide users through the complete NFT collection launch process - from metadata generation to smart contract deployment and marketplace listing.

![MiniLaunch Agent](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![ADK-TS](https://img.shields.io/badge/ADK--TS-0.5-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

### 🤖 **AI-Powered Workflow Orchestration**
- **Multi-Agent System** using ADK-TS framework
- Sequential workflow: Metadata → Deployment → Listing
- Intelligent conversation handling with context awareness
- Real-time progress tracking and status updates

### 🎨 **Professional UI/UX**
- Modern, responsive dashboard built with **Tailwind CSS**
- Smooth animations powered by **Framer Motion**
- Chat-style interface for natural interaction
- Real-time launch progress visualization
- Dark mode support

### ⚡ **Smart Contract Deployment**
- Support for **ERC-721**, **ERC-1155**, and **ERC-721A** standards
- Multi-chain deployment: Ethereum, Polygon, Base, Arbitrum
- Gas estimation and cost calculation
- Automated contract verification

### 📦 **IPFS Integration**
- Metadata storage via **Pinata**
- Image upload and hosting
- Automatic IPFS URI generation
- OpenSea-compatible metadata format

### 🏪 **Marketplace Integration**
- Automatic listing URL generation
- Support for OpenSea, Rarible, LooksRare
- Collection verification guidance
- Pricing strategy recommendations

---

## 🏗️ Architecture

### **Tech Stack**

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript 5.9
- Tailwind CSS 4
- Framer Motion 12

**Backend:**
- Next.js API Routes
- ADK-TS (Agent Development Kit)
- ethers.js 6
- Pinata IPFS API

**AI/ML:**
- ADK-TS Multi-Agent Framework
- Google Gemini / OpenAI GPT-4 / Anthropic Claude
- Sequential workflow orchestration
- Custom agent reasoning

### **Project Structure**

```
minilaunch-agent/
├── app/                          # Next.js App Router
│   ├── api/                      # Backend API routes
│   │   ├── agent/               # AI agent endpoints
│   │   ├── metadata/            # Metadata generation
│   │   ├── deploy/              # Contract deployment
│   │   ├── marketplace/         # Marketplace listing
│   │   └── upload/              # Image upload
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ChatInterface.tsx        # Chat UI
│   ├── LaunchStatus.tsx         # Progress tracker
│   └── Header.tsx               # App header
├── lib/                         # Core libraries
│   ├── agents/                  # ADK-TS agents
│   │   ├── nft-launch-agent.ts # Main orchestrator
│   │   ├── metadata-generator.ts
│   │   ├── contract-deployer.ts
│   │   └── marketplace-listing.ts
│   ├── web3/                    # Web3 utilities
│   │   ├── contract-deployer.ts
│   │   ├── ipfs-uploader.ts
│   │   ├── wallet-utils.ts
│   │   └── nft-contracts.ts
│   └── utils/                   # Utilities
│       ├── types.ts
│       └── validation.ts
├── public/                      # Static assets
├── .env.example                 # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+ and npm
- At least one LLM API key (Google, OpenAI, or Anthropic)
- Optional: Pinata account for IPFS
- Optional: Wallet private key for contract deployment

### **Installation**

1. **Clone the repository:**

```bash
git clone https://github.com/faithful1ofall/minilaunch-agent.git
cd minilaunch-agent
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```env
# Required: At least one LLM provider
GOOGLE_API_KEY=your_google_api_key_here
# OR
OPENAI_API_KEY=your_openai_api_key_here
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Optional: For IPFS uploads
PINATA_JWT=your_pinata_jwt_token

# Optional: For contract deployment
PRIVATE_KEY=your_wallet_private_key
ETHEREUM_RPC_URL=your_ethereum_rpc_url
POLYGON_RPC_URL=your_polygon_rpc_url
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage Guide

### **Basic Workflow**

1. **Start a Conversation**
   - Open the app and describe your NFT collection idea
   - The AI assistant will guide you through the process

2. **Metadata Generation**
   - Provide collection details (name, description, traits)
   - AI generates OpenSea-compatible metadata
   - Upload artwork to IPFS

3. **Smart Contract Deployment**
   - Choose blockchain and contract type
   - Review gas estimates
   - Deploy contract (requires wallet configuration)

4. **Marketplace Listing**
   - Get marketplace URLs
   - Follow verification steps
   - Set pricing and royalties

### **Example Conversation**

```
User: I want to create an NFT collection of 100 unique digital cats

AI: Great! Let me help you launch your digital cats NFT collection. 
    I'll need some information:
    - Collection name and symbol
    - Description and unique traits
    - Preferred blockchain (Ethereum, Polygon, etc.)
    - Royalty percentage

User: Name: "Crypto Cats", Symbol: "CCAT", on Polygon, 5% royalty

AI: Perfect! I'll now:
    1. Generate metadata for your collection
    2. Prepare deployment on Polygon
    3. Create marketplace listings
    
    [Workflow executes automatically]
```

---

## 🧠 ADK-TS Integration

### **Agent Architecture**

MiniLaunch uses ADK-TS's **Sequential Agent** pattern for reliable workflow orchestration:

```typescript
// Main orchestrator
const nftLaunchAgent = new SequentialAgent({
  name: "nft-launch-orchestrator",
  subAgents: [
    metadataGeneratorAgent,    // Step 1: Generate metadata
    contractDeployerAgent,     // Step 2: Deploy contract
    marketplaceListingAgent,   // Step 3: List on marketplaces
  ],
});
```

### **Specialized Agents**

1. **Coordinator Agent** - Handles user interaction and conversation flow
2. **Metadata Generator** - Creates OpenSea-compatible NFT metadata
3. **Contract Deployer** - Manages smart contract deployment strategy
4. **Marketplace Listing** - Handles marketplace integration and listing

### **Why ADK-TS?**

- ✅ **Multi-LLM Support** - Switch between Google, OpenAI, Anthropic seamlessly
- ✅ **Workflow Orchestration** - Sequential, parallel, and loop patterns
- ✅ **Type Safety** - Full TypeScript support with IntelliSense
- ✅ **Production Ready** - Built-in session management and error handling
- ✅ **Extensible** - Easy to add custom tools and agents

Learn more: [ADK-TS Documentation](https://adk.iqai.com/)

---

## 🔧 API Reference

### **Agent Endpoints**

#### `POST /api/agent`
Chat with the AI assistant

**Request:**
```json
{
  "message": "I want to create an NFT collection",
  "sessionId": "optional-session-id"
}
```

**Response:**
```json
{
  "response": "AI assistant response",
  "sessionId": "session-123",
  "action": "chat"
}
```

#### `PUT /api/agent/launch`
Execute full launch workflow

**Request:**
```json
{
  "collectionData": {
    "name": "My Collection",
    "symbol": "MC",
    "blockchain": "polygon"
  }
}
```

### **Metadata Endpoints**

#### `POST /api/metadata`
Generate and upload metadata

**Request:**
```json
{
  "name": "NFT Name",
  "description": "NFT Description",
  "image": "ipfs://...",
  "attributes": [
    { "trait_type": "Color", "value": "Blue" }
  ]
}
```

#### `GET /api/metadata?uri=ipfs://...`
Retrieve metadata from IPFS

### **Deployment Endpoints**

#### `POST /api/deploy`
Deploy smart contract

**Request:**
```json
{
  "name": "Collection Name",
  "symbol": "SYM",
  "blockchain": "polygon",
  "contractType": "ERC721",
  "totalSupply": 100,
  "royaltyPercentage": 5
}
```

#### `GET /api/deploy/estimate?blockchain=polygon`
Estimate deployment costs

### **Marketplace Endpoints**

#### `POST /api/marketplace`
Create marketplace listing

#### `GET /api/marketplace?address=0x...&blockchain=ethereum`
Get marketplace information

### **Upload Endpoints**

#### `POST /api/upload`
Upload image to IPFS

**Request:** `multipart/form-data` with `file` field

---

## 🎨 Customization

### **Adding Custom Agents**

Create a new agent in `lib/agents/`:

```typescript
import { LlmAgent } from "@iqai/adk";

export async function customAgent() {
  return new LlmAgent({
    name: "custom-agent",
    model: "gemini-2.5-flash",
    instruction: "Your custom instructions here",
    description: "What this agent does",
  });
}
```

### **Styling**

Modify `tailwind.config.ts` for custom colors and animations:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
    },
  },
}
```

### **Adding Blockchains**

Update `lib/web3/contract-deployer.ts`:

```typescript
const urls: Record<string, string> = {
  // Add your blockchain
  optimism: "https://mainnet.optimism.io",
};
```

---

## 🧪 Testing

### **Run Type Checking**

```bash
npm run type-check
```

### **Run Linting**

```bash
npm run lint
```

### **Build for Production**

```bash
npm run build
npm start
```

---

## 📚 Resources

### **ADK-TS**
- [Documentation](https://adk.iqai.com/)
- [GitHub Repository](https://github.com/IQAIcom/adk-ts)
- [Starter Templates](https://github.com/IQAIcom/adk-ts/tree/main/apps/starter-templates)

### **Web3 & NFTs**
- [OpenSea Metadata Standards](https://docs.opensea.io/docs/metadata-standards)
- [ERC-721 Standard](https://eips.ethereum.org/EIPS/eip-721)
- [ERC-1155 Standard](https://eips.ethereum.org/EIPS/eip-1155)
- [Pinata IPFS Documentation](https://docs.pinata.cloud/)

### **Next.js**
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**

- Follow TypeScript strict mode
- Use ESLint and Prettier for code formatting
- Write semantic, accessible HTML
- Add proper error handling
- Document complex logic

---

## 🐛 Troubleshooting

### **Common Issues**

**"API key not configured"**
- Ensure you've set at least one LLM API key in `.env`
- Restart the development server after adding keys

**"Failed to upload to IPFS"**
- Check your Pinata JWT token
- The app will use mock IPFS hashes if Pinata is not configured

**"Contract deployment failed"**
- Verify your wallet private key is correct
- Ensure you have sufficient funds for gas
- Check RPC URL is accessible

**Build errors**
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (18+ required)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[ADK-TS](https://github.com/IQAIcom/adk-ts)** - Agent Development Kit framework
- **[Next.js](https://nextjs.org/)** - React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[ethers.js](https://docs.ethers.org/)** - Ethereum library
- **[Pinata](https://www.pinata.cloud/)** - IPFS pinning service

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/faithful1ofall/minilaunch-agent/issues)
- **Discussions:** [GitHub Discussions](https://github.com/faithful1ofall/minilaunch-agent/discussions)
- **ADK-TS Discord:** [Join Community](https://discord.gg/w2Uk6ACK4D)

---

## 🗺️ Roadmap

- [ ] Telegram bot integration
- [ ] Discord bot integration
- [ ] Batch minting support
- [ ] Advanced metadata editor
- [ ] Collection analytics dashboard
- [ ] Multi-wallet support
- [ ] Gasless transactions (meta-transactions)
- [ ] AI-generated artwork integration
- [ ] Whitelist management
- [ ] Airdrop functionality

---

**Built with ❤️ using ADK-TS, Next.js, and Web3 technologies**

⭐ Star this repo if you find it helpful!
