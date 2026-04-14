import Dexie from "dexie";
import type { Table } from "dexie";
import type { User } from "../../features/users/types/user.types";

class AppDatabase extends Dexie {
  users!: Table<User , string>;

  constructor() {
    super("UserDB");
    this.version(1).stores({
      users: "id, name, picture",
    });
  }
}

export const db = new AppDatabase();