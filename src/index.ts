import Axios, { AxiosInstance } from 'axios';

import {
    Jobs,
    Pipelines,
    Users
} from './api';

export default class GitlabApi {
    private axios: AxiosInstance;

    // api endpoints
    private jobs!: Jobs
    private pipelines!: Pipelines;
    private users!: Users;

    public constructor(apiUrl: string, accessToken: string) {
        this.axios = Axios.create({
            baseURL: apiUrl,
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Accept" : "application/json",
                "Content-Type": "application/json"
            }
        })

        // debug
        // this.axios.interceptors.request.use(function (config) {
        //     console.log(config)
        //     return config;
        //   }, function (error) {
        //     return Promise.reject(error);
        //   });
    }

    /**
     * Getting Pipelines API
     * @returns Pipelines API
     */
    public getPipelinesApi(): Pipelines {
        if(!this.pipelines) {
            this.pipelines = new Pipelines(this.axios);
        }

        return this.pipelines;
    }

    /**
     * Getting Jobs API
     * @returns Jobs API
     */
    public getJobsApi(): Jobs {
        if(!this.jobs) {
            this.jobs = new Jobs(this.axios);
        }

        return this.jobs;
    }

    /**
     * Getting Users API
     * @returns Users API
     */
    public getUsersApi(): Users {
        if(!this.users) {
            this.users = new Users(this.axios);
        }

        return this.users;
    }
}