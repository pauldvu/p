import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { db, sqlite } from "./index";

console.log("🗄️ Migration started...");
migrate(db, { migrationsFolder: "drizzle" });
sqlite.close();
console.log("🗄️ Migration ended...");
