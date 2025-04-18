## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Stack and technical details
- Start next js app
- Install chadcn: ```bash npx shadcn@latest``` init using --legacy-peer-deps and added the most common components
- connected clerk: ```bash npm install @clerk/nextjs ```
    - Set Clerk API keys
    - Add middleware.ts to a root
    - Add ClerkProvider
- ... ans set up:
    - Customised session token w custom claims ```bash {"metadata": "{{user.public_metadata}}" ```
    - create users and roles
        -  "admin"
- added sign-in, sign-up pages, log-out button