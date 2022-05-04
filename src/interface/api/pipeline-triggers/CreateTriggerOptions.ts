export interface CreateTriggerOptions {
    /**
     * The ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * The trigger name
     */
    description: string;
}