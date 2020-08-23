
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;
}
