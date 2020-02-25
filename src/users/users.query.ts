import { QueryEntity } from "@datorama/akita";
import { User } from "./user.model";

import { UsersState, UsersStore, usersStore } from './users.store'
export class UsersQuery extends QueryEntity<UsersState, User>{
    constructor(protected store: UsersStore) {
        super(store)
    }
}

export const usersQuery = new UsersQuery(usersStore);