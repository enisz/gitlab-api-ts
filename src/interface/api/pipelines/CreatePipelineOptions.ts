export interface CreatePipelineOptions {
    /**
     * 	The ID or URL-encoded path of the project owned by the authenticated user
     */
    id: number | string;

    /**
     * The branch or tag to run the pipeline on.
     */
    ref: string;

    /**
     * An array containing the variables available in the pipeline, matching the structure [{ 'key': 'UPLOAD_TO_S3', 'variable_type': 'file', 'value': 'true' }, {'key': 'TEST', 'value': 'test variable'}].
     *
     * If variable_type is excluded, it defaults to env_var.
     */
    variables?: [{
        key: string;
        variable_type?: string;
        value: string;
    }]
}