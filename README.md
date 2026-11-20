# Hex Tunnel Web

### Public product website for Hex Tunnel

This repository contains a Next.js website for presenting Hex Tunnel, supported platforms, documentation, product information and contact resources. It is separate from the tunnel installation code and internal administration services.

## Website features

- Product overview and compatibility information.
- Public documentation and support pages.
- News, FAQs and product resources.
- Privacy, terms, security and acceptable-use information.
- Search-engine metadata, sitemap and structured data.
- Build output suitable for static hosting behind Nginx.

## Technology

Next.js · React · TypeScript · Static export · Nginx

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
```

The static export is written to `out/`. Copy `.env.example` to your own environment file and configure only the public `NEXT_PUBLIC_*` variables appropriate for your deployment.

## Scope

This website does not publish the private installer, activation credentials, server databases or administrative secrets.

---

**Hex Tunnel Web — public-facing documentation and product information.**
