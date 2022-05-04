import { AxiosResponse } from "axios";
import { CreateTriggerOptions } from "../interface/api/pipeline-triggers/CreateTriggerOptions";
import { CreateTriggerResponse } from "../interface/api/pipeline-triggers/CreateTriggerResponse";
import { GetTriggerDetailsOptions } from "../interface/api/pipeline-triggers/GetTriggerDetailsOptions";
import { GetTriggerDetailsResponse } from "../interface/api/pipeline-triggers/GetTriggerDetailsResponse";
import { ListProjectTriggersOptions } from "../interface/api/pipeline-triggers/ListProjectTriggersOptions";
import { ListProjectTriggersResponse } from "../interface/api/pipeline-triggers/ListProjectTriggersResponse";
import { RemoveTriggerOptions } from "../interface/api/pipeline-triggers/RemoveTriggerOptions";
import { UpdateTriggerOptions } from "../interface/api/pipeline-triggers/UpdateTriggerOptions";
import { UpdateTriggerResponse } from "../interface/api/pipeline-triggers/UpdateTriggerResponse";
import AbstractApiEndpoint from "./AbstractApiEndpoint";

export class PipelineTriggers extends AbstractApiEndpoint {

    /**
     * Get a list of project’s build triggers.
     * @param options ListProjectTriggersOptions
     * @returns ListProjectTriggersResponse[]
     */
    public listProjectTriggers(options: ListProjectTriggersOptions): Promise<ListProjectTriggersResponse[]> {
        const { id } = options;

        return this.getAxios().get<ListProjectTriggersResponse[]>(`projects/${id}/triggers`)
            .then((response: AxiosResponse<ListProjectTriggersResponse[]>) => response.data);
    }

    /**
     * Get details of project’s build trigger.
     * @param options GetTriggerDetailsOptions
     * @returns GetTriggerDetailsResponse
     */
    public getTriggerDetails(options: GetTriggerDetailsOptions): Promise<GetTriggerDetailsResponse> {
        const { id, trigger_id } = options;

        return this.getAxios().get<GetTriggerDetailsResponse>(`projects/${id}/triggers/${trigger_id}`)
            .then((response: AxiosResponse<GetTriggerDetailsResponse>) => response.data);
    }

    /**
     * Create a trigger for a project.
     * @param options CreateTriggerOptions
     * @returns CreateTriggerResponse
     */
    public createTrigger(options: CreateTriggerOptions): Promise<CreateTriggerResponse> {
        const { id, description } = options;

        return this.getAxios().post<CreateTriggerResponse>(`projects/${id}/triggers`, { description: description })
            .then((response: AxiosResponse<CreateTriggerResponse>) => response.data);
    }

    /**
     * Update a trigger for a project.
     * @param options UpdateTriggerOptions
     * @returns UpdateTriggerResponse
     */
    public updateTrigger(options: UpdateTriggerOptions): Promise<UpdateTriggerResponse> {
        const {id, trigger_id, description } = options;

        return this.getAxios().put<UpdateTriggerResponse>(`projects/${id}/triggers/${trigger_id}`, { description: description })
            .then((response: AxiosResponse<UpdateTriggerResponse>) => response.data);
    }

    /**
     * Remove a project’s build trigger.
     * @param options RemoveTriggerOptions
     * @returns void
     */
    public removeTrigger(options: RemoveTriggerOptions): Promise<void> {
        const { id, trigger_id } = options;

        return this.getAxios().delete(`projects/${id}/triggers/${trigger_id}`);
    }
}