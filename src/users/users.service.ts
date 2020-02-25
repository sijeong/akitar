import { UsersStore } from "./users.store";
import data from "./users.data";

import {of} from 'rxjs'
import { ID } from "@datorama/akita";
import { User } from "./user.model";
export class UsersService{
    constructor(private usersStore:UsersStore){}

    get(){
        of(data).subscribe(entities =>{
            this.usersStore.set(entities)
        })
    }

    setActive(id: ID){
        this.usersStore.setActive(id);
    }

    updateActive(user: User){
        this.usersStore.updateActive(user);
    }
}