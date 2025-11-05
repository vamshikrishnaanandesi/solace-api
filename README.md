# Node.js TypeScript API Boilerplate

A production-ready boilerplate for building scalable Node.js APIs with TypeScript and Express.

## Features

- TypeScript with Express.js
- JWT Authentication
- Winston Logging
- ESLint for code quality
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

# Linting
npm run lint
```

## License

ISC