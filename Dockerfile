# Base stage
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Build stage
FROM base AS builder

# Build the application
RUN npm run build

# --- Production stage ---
FROM base AS production

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in production
CMD ["npm", "start"]

# --- Development stage ---
FROM base AS development

# Expose the port for development
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
