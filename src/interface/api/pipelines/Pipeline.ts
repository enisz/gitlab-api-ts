export interface Pipeline {
    id: number;
    iid: number;
    project_id: number;
    status: "created" | "waiting_for_resource" | "preparing" | "pending" | "running" | "success" | "failed" | "canceled" | "skipped" | "manual" | "scheduled";
    source: "push" | "web" | "trigger" | "schedule" | "api" | "external" | "pipeline" | "chat" | "webide" | "merge_request_event" | "external_pull_request_event" | "parent_pipeline" | "ondemand_dast_scan" | "or ondemand_dast_validation";
    ref: string;
    sha: string;
    web_url: string;
    created_at: string;
    updated_at: string;
}