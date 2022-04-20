import Axios, { AxiosInstance } from 'axios';

import {
    Jobs,
    Pipelines
} from './api';

export default class GitlabApi {
    private axios: AxiosInstance;

    // api endpoints
    private jobs!: Jobs
    private pipelines!: Pipelines;

    public constructor(apiUrl: string, accessToken: string) {
        this.axios = Axios.create({
            baseURL: apiUrl,
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Accept" : "application/json",
                "Content-Type": "application/json"
            }
        })
    }

    public getPipelinesApi(): Pipelines {
        if(!this.pipelines) {
            this.pipelines = new Pipelines(this.axios);
        }

        return this.pipelines;
    }

    public getJobsApi(): Jobs {
        if(!this.jobs) {
            this.jobs = new Jobs(this.axios);
        }

        return this.jobs;
    }
}