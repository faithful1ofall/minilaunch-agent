# 🚀 Deployment Guide

This guide covers deploying MiniLaunch Agent to various platforms.

## Prerequisites

- GitHub account
- Your LLM API key (Google Gemini, OpenAI, or Anthropic)
- Optional: Pinata JWT for IPFS uploads
- Optional: Wallet private key for contract deployment

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/minilaunch-agent.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `minilaunch-agent` repository
5. Configure environment variables:
   - `GOOGLE_API_KEY` (or `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`)
   - Optional: `PINATA_JWT`
   - Optional: `PRIVATE_KEY`, `ETHEREUM_RPC_URL`, `POLYGON_RPC_URL`
6. Click "Deploy"

Your app will be live at `https://your-project.vercel.app`

### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

### Step 1: Build Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Visit [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Click "Deploy site"

### Netlify CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

## Deploy to Railway

### Step 1: Railway Setup

1. Visit [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository

### Step 2: Configure

Railway will auto-detect Next.js. Add environment variables:

```
GOOGLE_API_KEY=your_key
PINATA_JWT=your_jwt
```

### Step 3: Deploy

Railway will automatically deploy on every push to main.

## Deploy to Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t minilaunch-agent .

# Run container
docker run -p 3000:3000 \
  -e GOOGLE_API_KEY=your_key \
  -e PINATA_JWT=your_jwt \
  minilaunch-agent
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - GOOGLE_API_KEY=${GOOGLE_API_KEY}
      - PINATA_JWT=${PINATA_JWT}
      - PRIVATE_KEY=${PRIVATE_KEY}
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Deploy to AWS

### Using AWS Amplify

1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Add environment variables
6. Deploy

### Using EC2

```bash
# SSH into EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/YOUR_USERNAME/minilaunch-agent.git
cd minilaunch-agent

# Install dependencies
npm install

# Build
npm run build

# Install PM2
sudo npm install -g pm2

# Start application
pm2 start npm --name "minilaunch-agent" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## Environment Variables

### Required Variables

```env
# At least one LLM provider
GOOGLE_API_KEY=your_google_api_key
# OR
OPENAI_API_KEY=your_openai_api_key
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Optional Variables

```env
# IPFS Storage
PINATA_JWT=your_pinata_jwt_token

# Blockchain Deployment
PRIVATE_KEY=your_wallet_private_key
ETHEREUM_RPC_URL=your_ethereum_rpc_url
POLYGON_RPC_URL=your_polygon_rpc_url

# Optional Bot Integration
TELEGRAM_BOT_TOKEN=your_telegram_token
DISCORD_BOT_TOKEN=your_discord_token
```

## Post-Deployment Checklist

### ✅ Verify Deployment

1. Visit your deployed URL
2. Check that the homepage loads
3. Test the chat interface
4. Verify API endpoints are accessible

### ✅ Configure Domain (Optional)

1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. Add custom domain in your hosting platform
3. Configure DNS records
4. Enable HTTPS (usually automatic)

### ✅ Monitor Performance

1. Set up error tracking (e.g., Sentry)
2. Configure analytics (e.g., Google Analytics)
3. Monitor API usage
4. Set up uptime monitoring

### ✅ Security

1. Verify environment variables are secure
2. Enable HTTPS
3. Configure CORS if needed
4. Set up rate limiting
5. Review security headers

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables are set in your hosting platform
- Restart the application after adding variables
- Check variable names match exactly

### API Routes Return 404

- Verify build completed successfully
- Check API route files are in `app/api/` directory
- Ensure hosting platform supports Next.js API routes

### Slow Performance

- Enable caching
- Use CDN for static assets
- Optimize images
- Consider upgrading hosting plan

## Scaling Considerations

### Horizontal Scaling

- Use load balancer
- Deploy multiple instances
- Implement session storage (Redis)

### Database Integration

For production, consider adding:
- PostgreSQL for user data
- Redis for caching
- MongoDB for conversation history

### CDN Configuration

- Use Vercel Edge Network (automatic on Vercel)
- Configure CloudFlare for other platforms
- Enable image optimization

## Cost Estimation

### Vercel (Hobby Plan - Free)
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ⚠️ Limited to 100GB bandwidth/month

### Netlify (Free Tier)
- ✅ Free for personal projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS

### Railway (Starter Plan - $5/month)
- ✅ $5 free credit/month
- ✅ Pay for what you use
- ✅ Automatic scaling

### AWS (Variable)
- Amplify: ~$15-50/month
- EC2: ~$10-100/month depending on instance
- Additional costs for bandwidth

## Support

Need help with deployment?

- 📖 [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- 💬 [GitHub Discussions](https://github.com/faithful1ofall/minilaunch-agent/discussions)
- 🐛 [Report Issues](https://github.com/faithful1ofall/minilaunch-agent/issues)

---

**Happy Deploying! 🚀**
