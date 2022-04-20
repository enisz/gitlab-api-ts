export interface ListPipelineJobsOptions {
    /**
     * ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * ID of a pipeline. Can also be obtained in CI jobs via the predefined CI variable CI_PIPELINE_ID.
     */
    pipeline_id: number;

    /**
     * Scope of jobs to show. All jobs are returned if scope is not provided.
     */
    scope?: "created" | "pending" | "running" | "failed" | "success" | "canceled" | "skipped" | "manual";

    /**
     * Include retried jobs in the response. Defaults to false.
     */
    include_retried?: boolean;
}