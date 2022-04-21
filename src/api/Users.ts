import { AxiosResponse } from "axios";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import AbstractApiEndpoint from "./AbstractApiEndpoint";

import {
    GetUserOptions,
    ListUsersOptions,
    SingleUser,
    User
} from "../interface/api/users";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import { CurrentUser } from "../interface/api/users/CurrentUser";

export class Users extends AbstractApiEndpoint {

    /**
     * Get a list of users.
     * This function takes pagination parameters page and per_page to restrict the list of users.
     * @param options PaginatedOptions
     * @returns List of users
     */
    public listUsers(options?: ListUsersOptions & PaginatedOptions): Promise<PaginatedResponse<User>> {
        return this.getAxios().get<User[]>(`users`, { params: options })
            .then((response: AxiosResponse<User[]>) => this.paginatedResult<User>(response.data, response.headers));
    }

    /**
     * Get a single user.
     * @param options Query Options
     * @returns Single User
     */
    public getUser(options: GetUserOptions): Promise<SingleUser> {
        const { id } = options;

        return this.getAxios().get<SingleUser>(`users/${id}`)
            .then((response: AxiosResponse<SingleUser>) => response.data);
    }

    /**
     * Gets currently authenticated user.
     * @returns CurrentUser
     */
    public getCurrentUser(): Promise<CurrentUser> {
        return this.getAxios().get<CurrentUser>(`user`)
            .then((response: AxiosResponse<CurrentUser>) => response.data);
    }

}