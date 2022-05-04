export interface UpdateTriggerOptions {
    /**
     * The ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * The trigger ID
     */
    trigger_id: number;

    /**
     * The trigger name
     */
    description?: string;
}