import { AxiosResponse } from "axios";
import { CreatePipelineOptions } from "../interface/api/pipelines/CreatePipelineOptions";
import { CreatePipelineResponse } from "../interface/api/pipelines/CreatePipelineResponse";
import { DeletePipelineOptions } from "../interface/api/pipelines/DeletePipelineOptions";
import { GetPipelineOptions } from "../interface/api/pipelines/GetPipelineOptions";
import { GetPipelineResponse } from "../interface/api/pipelines/GetPipelineResponse";
import { GetPipelineVariablesOptions } from "../interface/api/pipelines/GetPipelineVariablesOptions";
import { GetPipelineVariablesResponse } from "../interface/api/pipelines/GetPipelineVariablesResponse";
import { ListProjectPipelineResponse } from "../interface/api/pipelines/ListProjectPipelineResponse";
import { ListProjectPipelinesOptions } from "../interface/api/pipelines/ListProjectPipelineOptions";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import { TriggerPipelineOptions } from "../interface/api/pipelines/TriggerPipelineOptions";
import { TriggerPipelineResponse } from "../interface/api/pipelines/TriggerPipelineResponse";
import AbstractApiEndpoint from "./AbstractApiEndpoint";
import FormData from 'form-data';

export class Pipelines extends AbstractApiEndpoint {

    /**
     * List pipelines in a project. Child pipelines are not included in the results, but you can get child pipeline individually.
     * @param options Query options
     * @returns List of pipelines in project
     */
    public listProjectPipelines(options: ListProjectPipelinesOptions & PaginatedOptions): Promise<PaginatedResponse<ListProjectPipelineResponse>> {
        const { id, page, per_page, ...endpointOptions } = options;

        return this.getAxios().get<ListProjectPipelineResponse[]>(`projects/${id}/pipelines`, { params: { page: page, per_page: per_page }, data: endpointOptions })
            .then((response: AxiosResponse<ListProjectPipelineResponse[]>) => this.paginatedResult<ListProjectPipelineResponse>(response.data, response.headers));
    }

    /**
     * Get one pipeline from a project.
     * @param options Query options
     * @returns One pipeline
     */
    public getPipeline(options: GetPipelineOptions): Promise<GetPipelineResponse> {
        const { id, pipeline_id } = options;

        return this.getAxios().get<GetPipelineResponse>(`projects/${id}/pipelines/${pipeline_id}`)
            .then((response: AxiosResponse<GetPipelineResponse>) => response.data);
    }

    /**
     * Get variables of a pipeline
     * @param options Query options
     * @returns Variables of a pipeline
     */
    public getPipelineVariables(options: GetPipelineVariablesOptions): Promise<GetPipelineVariablesResponse[]> {
        const { id, pipeline_id } = options;

        return this.getAxios().get<GetPipelineVariablesResponse[]>(`projects/${id}/pipelines/${pipeline_id}/variables`)
            .then((response: AxiosResponse<GetPipelineVariablesResponse[]>) => response.data);
    }

    /**
     * Triggering a pipeline using a trigger token
     * @param options TriggeredPipelineOptions
     * @returns TriggeredPipeline details
     */
    public triggerPipeline(options: TriggerPipelineOptions): Promise<TriggerPipelineResponse> {
        const {ref, trigger_token, id} = options;
        let formData = new FormData();

        formData.append("ref", ref);
        formData.append("token", trigger_token);

        if(options.variables) {
            for(const key in options.variables) {
                formData.append(`variables[${key}]`, options.variables[key]);
            }
        }

        return this.getAxios().post(`projects/${id}/trigger/pipeline`, formData, { headers: (typeof formData.getHeaders !== "undefined") ? formData.getHeaders() : undefined  })
            .then((response: AxiosResponse<TriggerPipelineResponse>) => response.data);
    }

    /**
     * Create a new pipeline
     * @param options CreatePipelineOptions
     * @returns CreatePipelineResponse
     */
    public createPipeline(options: CreatePipelineOptions): Promise<CreatePipelineResponse> {
        const { id, ...restOptions } = options;

        return this.getAxios().post<CreatePipelineResponse>(`projects/${id}/pipeline`, restOptions)
            .then((response: AxiosResponse<CreatePipelineResponse>) => response.data);
    }

    /**
     * Delete a pipeline
     * @param options DeletePipelineOptions
     * @returns void
     */
    public deletePipeline(options: DeletePipelineOptions): Promise<void> {
        const { id, pipeline_id } = options;

        return this.getAxios().delete(`projects/${id}/pipelines/${pipeline_id}`);
    }

}