export interface ListUsersOptions {
    username?: string;
    active?: boolean;
    blocked?: boolean;
    external?: boolean;
    exclude_internal?: boolean;
    exclude_external?: boolean;
    without_project_bots?: boolean;
}