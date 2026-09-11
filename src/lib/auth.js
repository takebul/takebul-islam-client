import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt, admin } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const adminEmail = process.env.ADMIN_EMAIL || "takebulislam@gmail.com";
          const isAdmin = user.email.toLowerCase() === adminEmail.toLowerCase();
          return {
            data: {
              ...user,
              role: isAdmin ? "admin" : "user",
            },
          };
        },
      },
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
  },
  plugins: [
    jwt({
      jwt: {
        definePayload: ({ user }) => {
          const adminEmail = process.env.ADMIN_EMAIL || "takebulislam@gmail.com";
          const isAdmin = user.role === "admin" || user.email.toLowerCase() === adminEmail.toLowerCase();
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: isAdmin ? "admin" : (user.role || "user"),
          };
        },
      },
    }),
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});

