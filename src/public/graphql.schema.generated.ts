
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Project {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract project(id: string): Project | Promise<Project>;
}
