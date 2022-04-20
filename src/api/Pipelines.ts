import { AxiosResponse } from "axios";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import AbstractApiEndpoint from "./AbstractApiEndpoint";
import {
    GetPipelineOptions,
    GetPipelineVariablesOptions,
    ListProjectPipelinesOptions,
    Pipeline,
    SinglePipeline,
    PipelineVariables
} from "../interface/api/pipelines";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";

export class Pipelines extends AbstractApiEndpoint {

    /**
     * List pipelines in a project. Child pipelines are not included in the results, but you can get child pipeline individually.
     * @param options Query options
     * @returns List of pipelines in project
     */
    public listProjectPipelines(options: ListProjectPipelinesOptions & PaginatedOptions): Promise<PaginatedResponse<Pipeline>> {
        const { page, per_page, ...endpointOptions } = options;

        return this.getAxios().get<Pipeline[]>(`projects/${options.id}/pipelines${this.paginatedUrl(options)}`, { data: endpointOptions ? endpointOptions : undefined })
            .then((response: AxiosResponse<Pipeline[]>) => this.paginatedResult<Pipeline>(response.data, response.headers));
    }

    /**
     * Get one pipeline from a project.
     * @param options Query options
     * @returns One pipeline
     */
    public getPipeline(options: GetPipelineOptions): Promise<SinglePipeline> {
        return this.getAxios().get<SinglePipeline>(`projects/${options.id}/pipelines/${options.pipeline_id}`)
            .then((response: AxiosResponse<SinglePipeline>) => response.data);
    }

    /**
     * Get variables of a pipeline
     * @param options Query options
     * @returns Variables of a pipeline
     */
    public getPipelineVariables(options: GetPipelineVariablesOptions): Promise<PipelineVariables> {
        return this.getAxios().get<PipelineVariables>(`projects/${options.id}/pipelines/${options.pipeline_id}/variables`)
            .then((response: AxiosResponse<PipelineVariables>) => response.data);
    }

}