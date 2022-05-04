export interface CreatePipelineResponse {
    id: number;
    iid: number;
    project_id: number;
    sha: string;
    ref: string;
    status: string;
    source: string;
    created_at: string;
    updated_at: string;
    web_url: string;
    before_sha: string;
    tag: boolean;
    yaml_errors: null;
    user: {
        id: number;
        username: string;
        name: string;
        state: string;
        avatar_url: string;
        web_url: string;
    },
    started_at: string | null;
    finished_at: string | null;
    committed_at: string | null;
    duration: number | null;
    queued_duration: number | null;
    coverage: number | null;
    detailed_status: {
        icon: string;
        text: string;
        label: string;
        group: string;
        tooltip: string;
        has_details: boolean;
        details_path: string;
        illustration: string | null;
        favicon: string;
    }
}