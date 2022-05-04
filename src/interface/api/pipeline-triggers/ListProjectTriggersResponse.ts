export interface ListProjectTriggersResponse {
    id: number;
    token: string;
    description: string;
    created_at: string;
    updated_at: string;
    last_used: string;
    owner: {
        id: number;
        username: string;
        name: string;
        state: string;
        avatar_url: string;
        web_url: string;
    }
}