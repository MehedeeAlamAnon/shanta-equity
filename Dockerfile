FROM --platform=linux/amd64 node:lts-bookworm AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM --platform=linux/amd64 node:lts-bookworm AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm run generate

FROM lipanski/docker-static-website:latest AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["/busybox", "httpd", "-f", "-v", "-p", "3000", "-c", "httpd.conf"]




