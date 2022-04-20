import { Pipeline } from "./Pipeline";

export interface SinglePipeline extends Pipeline {
    before_sha: string;
    tag: boolean;
    yaml_errors: string[];
    user: {
        name: string;
        username: string;
        id: number;
        state: string;
        avatar_url: string;
        web_url: string;
    },
    updated_at: string;
    started_at: string | null;
    finished_at?: string
    committed_at: string | null;
    duration?: number;
    queued_duration: number;
    coverage: number;
    detailed_status: {
        icon: string;
        text: string;
        label: string;
        group: string;
        tooltip: string;
        has_details: boolean;
        details_path: string;
        illustration: null,
        favicon: string;
    }
}