
import { db } from "../../../shared/db/dexie";
import type { User } from "../types/user.types";


class UserRepository {
    constructor() { }

    async savePersistedUsers(users: User[]) {
        await db.users.bulkPut(users);
    }

    async getPersistedUsers(): Promise<User[]> {
        return await db.users.toArray();
    }

    async removePersistedUsers(id: string): Promise<void> {
        await db.users.delete(id);
    }

    async clearUsers(): Promise<void> {
        await db.users.clear();
    }
}

export const userRepository = new UserRepository();