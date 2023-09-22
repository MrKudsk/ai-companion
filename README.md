# AI - Companion

This is toturial from YouTube with name "Build a SaaS: AI Companion"

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

You have to install a database, I have been using a PostgreSql, but you can also
use a Sqlite or MySQL.

Fillout enviorment data, in the file .env

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=XXXXXXXXXXXXXXXXXX

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://user:password@localhost:5432/aicompanion?schema=public"
```

### Database

Seting up the database initial.

```bash
npx prisma generate

npx prisma db push

node script/seed.ts
```

