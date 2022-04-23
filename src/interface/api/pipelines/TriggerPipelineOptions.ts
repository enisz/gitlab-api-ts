export interface TriggerPipelineOptions {
    id: string | number;
    trigger_token: string;
    ref: string;
    variables?: {[key: string]: string}
}