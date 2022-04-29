import { AxiosResponse } from "axios";
import { CurrentUser } from "../interface/api/users/CurrentUser";
import { GetUserOptions } from "../interface/api/users/GetUserOptions";
import { ListUsersOptions } from "../interface/api/users/ListUsersOptions";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import { SingleUser } from "../interface/api/users/SingleUser";
import { User } from "../interface/api/users/User";
import AbstractApiEndpoint from "./AbstractApiEndpoint";

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