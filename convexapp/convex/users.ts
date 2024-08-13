import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: { email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const passwordHash = args.password; // In a real app, hash the password
    const user = await ctx.db.insert("users", {
      email: args.email,
      passwordHash,
    });
    return user;
  },
});

export const getUser = query({
    args: { email: v.string() },
    handler: async (ctx, args) => {
      console.log("Fetching user with email:", args.email);
      return await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .unique();
    }, });