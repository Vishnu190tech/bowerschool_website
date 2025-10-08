# Stage 1: Dependencies
FROM node:20.18.0-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Stage 2: Builder
FROM node:20.18.0-alpine AS builder
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client with correct binary targets
RUN yarn prisma generate

# Build Next.js application
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# Stage 3: Runner (Production)
FROM node:20.18.0-alpine AS runner
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy node_modules (includes Prisma Client with correct binaries)
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copy built Next.js application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["yarn", "start"]
