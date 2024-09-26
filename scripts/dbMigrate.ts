/* eslint-disable no-console */
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { Env } from "@/libs/Env";

const client = postgres(Env.DATABASE_URL, { max: 1 });

async function main() {
  console.log("Migration started");

  await migrate(drizzle(client), { migrationsFolder: "./migrations" });

  console.log("Migration completed");

  await client.end();

  process.exit(0);
}

main().catch((error) => {
  console.error("Migration failed");
  console.log(error);
  process.exit(1);
});
