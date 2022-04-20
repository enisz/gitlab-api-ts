export interface Job {
    commit: {
        author_email: string;
        author_name: string;
        created_at: string;
        id: string;
        message: string;
        short_id: string;
        title: string;
    },
    coverage: null;
    allow_failure: boolean;
    created_at: string;
    started_at: string;
    finished_at: string;
    duration: number;
    queued_duration: number;
    artifacts_file: {
        filename: string;
        size: number;
    },
    artifacts: [{
        file_type: string;
        size: number;
        filename: string;
        file_format: string;
    }],
    artifacts_expire_at: string;
    tag_list: string[];
    id: number;
    name: string;
    pipeline: {
        id: number;
        project_id: number;
        ref: string;
        sha: string;
        status: string;
    },
    ref: string;
    runner: null;
    stage: string;
    status: string;
    failure_reason: string;
    tag: boolean;
    web_url: string;
    user: {
        id: number;
        name: string;
        username: string;
        state: string;
        avatar_url: string;
        web_url: string;
        created_at: string;
        bio: string | null;
        location: string | null;
        public_email: string;
        skype: string;
        linkedin: string;
        twitter: string;
        website_url: string;
        organization: string;
    }
}