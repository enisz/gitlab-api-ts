export interface DeletePipelineOptions {
    /**
     * The ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * 	The ID of a pipeline
     */
    pipeline_id: number;
}