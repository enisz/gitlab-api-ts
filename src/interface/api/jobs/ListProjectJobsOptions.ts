export interface ListProjectJobsOptions {
    id: number | string;
    scope?: "created" | "pending" | "running" | "failed" | "success" | "canceled" | "skipped" | "manual" | ("created" | "pending" | "running" | "failed" | "success" | "canceled" | "skipped" | "manual")[];
}