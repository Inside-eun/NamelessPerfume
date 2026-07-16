import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Direct (non-pooled) connection: Prisma Migrate needs this rather than
    // the pgbouncer-pooled URL the app uses at runtime.
    url: process.env["DATABASE_URL_UNPOOLED"],
  },
});
