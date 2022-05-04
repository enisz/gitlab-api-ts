import { AxiosResponse } from "axios";
import { CreateTriggerOptions } from "../interface/api/pipeline-triggers/CreateTriggerOptions";
import { GetTriggerDetailsOptions } from "../interface/api/pipeline-triggers/GetTriggerDetailsOptions";
import { ListProjectTriggersOptions } from "../interface/api/pipeline-triggers/ListProjectTriggersOptions";
import { RemoveTriggerOptions } from "../interface/api/pipeline-triggers/RemoveTriggerOptions";
import { TriggerDetails } from "../interface/api/pipeline-triggers/TriggerDetails";
import { UpdateTriggerOptions } from "../interface/api/pipeline-triggers/UpdateTriggerOptions";
import AbstractApiEndpoint from "./AbstractApiEndpoint";

export class PipelineTriggers extends AbstractApiEndpoint {

    /**
     * Get a list of project’s build triggers.
     * @param options ListProjectTriggersOptions
     * @returns TriggerDetails[]
     */
    public listProjectTriggers(options: ListProjectTriggersOptions): Promise<TriggerDetails[]> {
        const { id } = options;

        return this.getAxios().get<TriggerDetails[]>(`projects/${id}/triggers`)
            .then((response: AxiosResponse<TriggerDetails[]>) => response.data);
    }

    /**
     * Get details of project’s build trigger.
     * @param options GetTriggerDetailsOptions
     * @returns TriggerDetails
     */
    public getTriggerDetails(options: GetTriggerDetailsOptions): Promise<TriggerDetails> {
        const { id, trigger_id } = options;

        return this.getAxios().get<TriggerDetails>(`projects/${id}/triggers/${trigger_id}`)
            .then((response: AxiosResponse<TriggerDetails>) => response.data);
    }

    /**
     * Create a trigger for a project.
     * @param options CreateTriggerOptions
     * @returns TriggerDetails
     */
    public createTrigger(options: CreateTriggerOptions): Promise<TriggerDetails> {
        const { id, description } = options;

        return this.getAxios().post<TriggerDetails>(`projects/${id}/triggers`, { description: description })
            .then((response: AxiosResponse<TriggerDetails>) => response.data);
    }

    /**
     * Update a trigger for a project.
     * @param options UpdateTriggerOptions
     * @returns TriggerDetails
     */
    public updateTrigger(options: UpdateTriggerOptions): Promise<TriggerDetails> {
        const {id, trigger_id, description } = options;

        return this.getAxios().put<TriggerDetails>(`projects/${id}/triggers/${trigger_id}`, { description: description })
            .then((response: AxiosResponse<TriggerDetails>) => response.data);
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