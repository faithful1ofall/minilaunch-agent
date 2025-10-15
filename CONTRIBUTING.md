# Contributing to MiniLaunch Agent

Thank you for your interest in contributing to MiniLaunch Agent! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/faithful1ofall/minilaunch-agent/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, etc.)

### Suggesting Features

1. Check existing [Issues](https://github.com/faithful1ofall/minilaunch-agent/issues) and [Discussions](https://github.com/faithful1ofall/minilaunch-agent/discussions)
2. Create a new discussion or issue describing:
   - The problem you're trying to solve
   - Your proposed solution
   - Alternative solutions considered
   - Additional context

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style guidelines below
   - Add tests if applicable
   - Update documentation as needed

4. **Test your changes**
   ```bash
   npm run type-check
   npm run lint
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference related issues
   - Include screenshots for UI changes

## Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/minilaunch-agent.git
   cd minilaunch-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Add your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### TypeScript

- Use TypeScript strict mode
- Define proper types for all functions and variables
- Avoid `any` type unless absolutely necessary
- Use interfaces for object shapes
- Export types from `lib/utils/types.ts`

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper TypeScript types for props
- Follow naming conventions:
  - Components: PascalCase (`ChatInterface.tsx`)
  - Utilities: camelCase (`validation.ts`)
  - Constants: UPPER_SNAKE_CASE

### Styling

- Use Tailwind CSS utility classes
- Follow existing color scheme and spacing
- Ensure responsive design (mobile-first)
- Test dark mode compatibility
- Use Framer Motion for animations

### API Routes

- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Validate input data
- Return consistent response format:
  ```typescript
  {
    success: boolean;
    data?: any;
    error?: string;
    message?: string;
  }
  ```
- Handle errors gracefully
- Add proper TypeScript types

### Comments

- Document complex logic
- Use JSDoc for functions:
  ```typescript
  /**
   * Brief description
   * @param param1 - Description
   * @returns Description
   */
  ```
- Avoid obvious comments
- Keep comments up to date

## Project Structure

```
minilaunch-agent/
├── app/              # Next.js app (pages and API routes)
├── components/       # React components
├── lib/             # Core libraries
│   ├── agents/      # ADK-TS agents
│   ├── web3/        # Web3 utilities
│   └── utils/       # Helper functions
└── public/          # Static assets
```

## Testing

- Write tests for new features
- Ensure existing tests pass
- Test edge cases and error scenarios
- Test on multiple browsers
- Verify mobile responsiveness

## Documentation

- Update README.md for new features
- Add JSDoc comments for public APIs
- Update API reference if needed
- Include code examples where helpful

## Questions?

- Open a [Discussion](https://github.com/faithful1ofall/minilaunch-agent/discussions)
- Join the [ADK-TS Discord](https://discord.gg/w2Uk6ACK4D)
- Check existing [Issues](https://github.com/faithful1ofall/minilaunch-agent/issues)

Thank you for contributing! 🚀
