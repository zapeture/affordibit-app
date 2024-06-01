import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const guestbookSchema = pgTable("guestbook", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  body: text("body").notNull(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
