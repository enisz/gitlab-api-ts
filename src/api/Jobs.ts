import { AxiosResponse } from "axios";
import {
    GetJobOptions,
    Job,
    ListProjectJobsOptions,
    ListPipelineJobsOptions,
    GetJobLogOptions,
} from "../interface/api/jobs";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";
import ApiEndpoint from "./AbstractApiEndpoint";

export class Jobs extends ApiEndpoint {
    /**
     * Get a list of jobs in a project. Jobs are sorted in descending order of their IDs.
     * @param options Query options
     * @returns List of jobs in project
     */
    public listProjectJobs(options: ListProjectJobsOptions & PaginatedOptions): Promise<PaginatedResponse<Job>> {
        const { id, ...endpointOptions } = options;

        return this.getAxios().get(`projects/${id}/jobs`, { params: endpointOptions })
            .then((response: AxiosResponse) => this.paginatedResult<Job>(response.data, response.headers))
    }

    /**
     * Get a list of jobs for a pipeline.
     * @param options Query options
     * @returns List of jobs in pipeline
     */
    public listPipelineJobs(options: ListPipelineJobsOptions & PaginatedOptions): Promise<PaginatedResponse<Job>> {
        const { id, pipeline_id, ...endpointOptions } = options;

        return this.getAxios().get<Job[]>(`projects/${id}/pipelines/${pipeline_id}/jobs`, { params: endpointOptions })
            .then((response: AxiosResponse<Job[]>) => this.paginatedResult<Job>(response.data, response.headers));
    }

    /**
     * Get a single job of a project
     * @param options Query options
     * @returns A job
     */
    public getJob(options: GetJobOptions): Promise<Job> {
        const { id, job_id } = options;

        return this.getAxios().get<Job>(`projects/${id}/jobs/${job_id}`)
            .then((response: AxiosResponse<Job>) => response.data);
    }

    /**
     * Get a log (trace) of a specific job of a project:
     * @param options GetJobLogOptions object
     * @returns Job log
     */
    public getJobLog(options: GetJobLogOptions): Promise<string> {
        const { id, job_id } = options;

        return this.getAxios().get<string>(`projects/${id}/jobs/${job_id}/trace`)
            .then((response: AxiosResponse<string>) => response.data);
    }
}