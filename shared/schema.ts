import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "residential" | "commercial" | "hospitality";
}

// Service type definition
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Testimonial type definition
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}