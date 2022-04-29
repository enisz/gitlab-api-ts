import { Jobs } from './api/Jobs';
import { Pipelines } from './api/Pipelines';
import { Users } from './api/Users';
import Axios, { AxiosInstance } from 'axios';

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