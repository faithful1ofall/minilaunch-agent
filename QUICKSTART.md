# 🚀 Quick Start Guide

Get MiniLaunch Agent running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- At least one LLM API key (Google Gemini recommended for free tier)

## Step 1: Get Your API Key

### Google Gemini (Recommended - Free Tier Available)

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### Alternative: OpenAI

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy your API key

### Alternative: Anthropic Claude

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an account or sign in
3. Generate an API key
4. Copy your API key

## Step 2: Clone and Install

```bash
# Clone the repository
git clone https://github.com/faithful1ofall/minilaunch-agent.git
cd minilaunch-agent

# Install dependencies
npm install
```

## Step 3: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your API key
# For Google Gemini:
GOOGLE_API_KEY=your_actual_api_key_here

# OR for OpenAI:
OPENAI_API_KEY=your_actual_api_key_here

# OR for Anthropic:
ANTHROPIC_API_KEY=your_actual_api_key_here
```

## Step 4: Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Step 5: Try It Out!

1. Open your browser to [http://localhost:3000](http://localhost:3000)
2. You'll see the MiniLaunch Agent dashboard
3. Start chatting with the AI assistant in the chat interface
4. Try asking: "I want to create an NFT collection of 100 unique digital artworks"

## Example Conversation Flow

```
You: I want to create an NFT collection

AI: Great! I'd be happy to help you launch your NFT collection. 
    Let me gather some information:
    - What's your collection name?
    - How many NFTs in the collection?
    - Which blockchain do you prefer?
    - What's the theme or concept?

You: Collection name is "Crypto Cats", 100 NFTs, on Polygon, 
     featuring unique cat characters with different traits

AI: Perfect! Here's what I'll help you with:
    1. Generate metadata for your Crypto Cats collection
    2. Prepare smart contract deployment on Polygon
    3. Create marketplace listings on OpenSea
    
    Let's start with the metadata...
```

## Optional: IPFS Configuration

For actual IPFS uploads (not required for testing):

1. Sign up at [Pinata](https://www.pinata.cloud/)
2. Get your JWT token from the API Keys section
3. Add to `.env`:
   ```
   PINATA_JWT=your_pinata_jwt_token
   ```

## Optional: Contract Deployment

For actual smart contract deployment (not required for testing):

1. Get a wallet private key (⚠️ Use a test wallet only!)
2. Get RPC URLs from [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/)
3. Add to `.env`:
   ```
   PRIVATE_KEY=your_test_wallet_private_key
   ETHEREUM_RPC_URL=your_ethereum_rpc_url
   POLYGON_RPC_URL=your_polygon_rpc_url
   ```

## Troubleshooting

### "API key not configured"
- Make sure you've added your API key to `.env`
- Restart the development server after adding the key

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore the [API Reference](README.md#-api-reference)
- Check out [ADK-TS Documentation](https://adk.iqai.com/)
- Join the [Discord Community](https://discord.gg/w2Uk6ACK4D)

## Production Deployment

Ready to deploy? Check out these guides:

- [Deploy to Vercel](https://vercel.com/docs)
- [Deploy to Netlify](https://docs.netlify.com/)
- [Deploy to Railway](https://docs.railway.app/)

---

**Need help?** Open an issue on [GitHub](https://github.com/faithful1ofall/minilaunch-agent/issues)
