export interface ListProjectPipelinesOptions {
    /**
     * The ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * The scope of pipelines
     */
    scope?: "running" | "pending" | "finished" | "branches" | "tags";

    /**
     * The status of pipelines
     */
    status?: "created" | "waiting_for_resource" | "preparing" | "pending" | "running" | "success" | "failed" | "canceled" | "skipped" | "manual" | "scheduled";

    /**
     * In GitLab 14.3 and later, how the pipeline was triggered
     */
    source?: "push" | "web" | "trigger" | "schedule" | "api" | "external" | "pipeline" | "chat" | "webide" | "merge_request_event" | "external_pull_request_event" | "parent_pipeline" | "ondemand_dast_scan" | "or ondemand_dast_validation";

    /**
     * The ref of pipelines
     */
    ref?: string;

    /**
     * The SHA of pipelines
     */
    sha?: string;

    /**
     * Returns pipelines with invalid configurations
     */
    yaml_errors?: boolean;

    /**
     * The username of the user who triggered pipelines
     */
    username?: string;

    /**
     * Return pipelines updated after the specified date.
     * Expected in ISO 8601 format (2019-03-15T08:00:00Z).
     */
    updated_after?: string;

    /**
     * Return pipelines updated before the specified date.
     * Expected in ISO 8601 format (2019-03-15T08:00:00Z).
     */
    updated_before?: string;

    /**
     * Order pipelines by id, status, ref, updated_at or user_id (default: id)
     */
    order_by?: "id" | "status" | "ref" | "updated_at" | "user_id";

    /**
     * Sort pipelines in asc or desc order (default: desc)
     */
    sort?: "asc" | "desc";
}