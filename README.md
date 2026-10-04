# Metropole Studios

Free, GitHub-ready starter for the Metropole Studios customer store + admin panel.

## Included
- Customer home/store/search/categories
- Product details
- Cart and checkout demo
- Orders
- Support tickets
- AI support placeholder
- Announcements
- Account/profile
- Admin dashboard
- Products/orders/customers/tickets/coupons/staff sections
- Automation API hooks
- PostgreSQL schema
- GitHub Actions CI

## Run locally

Requirements: Node.js 20+

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

This starter intentionally uses local demo data so it runs immediately. For production, connect the provided PostgreSQL schema and payment provider webhooks.

## GitHub

Create a repository, then:

```bash
git init
git add .
git commit -m "Initial Metropole Studios app"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY
git push -u origin main
```

## Free deployment

A simple free path is GitHub + Vercel for the web app + Supabase/PostgreSQL for the database. Payment processors can still charge transaction fees.

## Important production work

Before accepting real payments:
1. Add real authentication.
2. Store orders in PostgreSQL.
3. Verify payment webhooks server-side.
4. Never trust client-side prices.
5. Protect `/admin` with staff roles.
6. Keep Discord/LuckPerms secrets server-side.
7. Add rate limiting and audit logs.
