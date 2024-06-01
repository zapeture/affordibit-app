import { defineConfig } from "drizzle-kit";

import { Env } from "@/libs/Env";

export default defineConfig({
  out: "./migrations",
  schema: "./src/models/Schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: Env.DATABASE_URL,
  },
});
