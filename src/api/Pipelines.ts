import { AxiosResponse } from "axios";
import { GetPipelineOptions } from "../interface/api/pipelines/GetPipelineOptions";
import { GetPipelineVariablesOptions } from "../interface/api/pipelines/GetPipelineVariablesOptions";
import { ListProjectPipelinesOptions } from "../interface/api/pipelines/ListProjectPipelinesOptions";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import { Pipeline } from "../interface/api/pipelines/Pipeline";
import { PipelineVariables } from "../interface/api/pipelines/PipelineVariables";
import { SinglePipeline } from "../interface/api/pipelines/SinglePipeline";
import { TriggeredPipeline } from "../interface/api/pipelines/TriggeredPipeline";
import { TriggerPipelineOptions } from "../interface/api/pipelines/TriggerPipelineOptions";
import AbstractApiEndpoint from "./AbstractApiEndpoint";
import FormData from 'form-data';

export class Pipelines extends AbstractApiEndpoint {

    /**
     * List pipelines in a project. Child pipelines are not included in the results, but you can get child pipeline individually.
     * @param options Query options
     * @returns List of pipelines in project
     */
    public listProjectPipelines(options: ListProjectPipelinesOptions & PaginatedOptions): Promise<PaginatedResponse<Pipeline>> {
        const { id, page, per_page, ...endpointOptions } = options;

        return this.getAxios().get<Pipeline[]>(`projects/${id}/pipelines`, { params: { page: page, per_page: per_page }, data: endpointOptions })
            .then((response: AxiosResponse<Pipeline[]>) => this.paginatedResult<Pipeline>(response.data, response.headers));
    }

    /**
     * Get one pipeline from a project.
     * @param options Query options
     * @returns One pipeline
     */
    public getPipeline(options: GetPipelineOptions): Promise<SinglePipeline> {
        const { id, pipeline_id } = options;

        return this.getAxios().get<SinglePipeline>(`projects/${id}/pipelines/${pipeline_id}`)
            .then((response: AxiosResponse<SinglePipeline>) => response.data);
    }

    /**
     * Get variables of a pipeline
     * @param options Query options
     * @returns Variables of a pipeline
     */
    public getPipelineVariables(options: GetPipelineVariablesOptions): Promise<PipelineVariables> {
        const { id, pipeline_id } = options;

        return this.getAxios().get<PipelineVariables>(`projects/${id}/pipelines/${pipeline_id}/variables`)
            .then((response: AxiosResponse<PipelineVariables>) => response.data);
    }

    /**
     * Triggering a pipeline using a trigger token
     * @param options TriggeredPipelineOptions
     * @returns TriggeredPipeline details
     */
    public triggerPipeline(options: TriggerPipelineOptions): Promise<TriggeredPipeline> {
        const {ref, trigger_token, id} = options;
        let formData = new FormData();

        formData.append("ref", ref);
        formData.append("token", trigger_token);

        if(options.variables) {
            for(const key in options.variables) {
                formData.append(`variables[${key}]`, options.variables[key]);
            }
        }

        console.log(formData);
        console.log(typeof formData);
        console.log(formData.getHeaders);
        console.log(typeof formData.getHeaders);

        return this.getAxios().post(`projects/${id}/trigger/pipeline`, formData, { headers: typeof formData.getHeaders !== undefined ? formData.getHeaders() : undefined  })
            .then((response: AxiosResponse<TriggeredPipeline>) => response.data);
    }

}