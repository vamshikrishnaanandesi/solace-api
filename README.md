# Node.js TypeScript API Boilerplate

A production-ready boilerplate for building scalable Node.js APIs with TypeScript and Express.

## Features

- TypeScript with Express.js
- JWT Authentication
- Winston Logging
- ESLint + Prettier for code quality
- Pre-commit hooks (lint & format)
- Hot reload development

## Installation

```bash
git clone <repository-url>
cd solace-api
npm install
```

## Environment Setup

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your-secret-key
```

## Running the Application

```bash
# Development
npm run dev

# Production
npm run build
npm start

# Code Quality
npm run lint          # Check for linting errors
npm run lint:fix      # Fix auto-fixable lint errors
npm run format        # Format code with Prettier
npm run format:check  # Check if code is formatted
```

## Code Quality

This project uses ESLint and Prettier with pre-commit hooks to ensure code quality:

- **Automatic formatting** on save (VS Code)
- **Pre-commit hooks** run lint + format on staged files
- **Consistent code style** across the entire codebase

## License

ISC
