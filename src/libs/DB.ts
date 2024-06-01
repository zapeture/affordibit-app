import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { Env } from "./Env";

const client = postgres(Env.DATABASE_URL, { max: 1 });

export const db = drizzle(client);

// Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
// Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
// Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
if (process.env.NODE_ENV === "development") {
  await migrate(db, { migrationsFolder: "./migrations" });
}
