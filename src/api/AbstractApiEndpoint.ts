import { AxiosInstance, AxiosResponseHeaders } from "axios";
import { PaginatedOptions } from "../interface/api/PaginatedOptions";
import { PaginatedResponse } from "../interface/api/PaginatedResponse";

export default abstract class AbstractApiEndpoint {
    private axios: AxiosInstance;

    public constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    /**
     * Returning Axios instance
     * @returns Axios Instance
     */
    protected getAxios(): AxiosInstance {
        return this.axios;
    }

    /**
     * Returning endpoint data with page informations
     * @param data Array of data from the endpoint
     * @param headers Request headers
     * @returns PaginatedResponse response data with page numbers
     */
    protected paginatedResult<Type>(data: Type[], headers: AxiosResponseHeaders): PaginatedResponse<Type> {
        return {
            nextPage: parseInt(headers["x-next-page"]) || -1,
            page: parseInt(headers["x-page"]) || -1,
            perPage: parseInt(headers["x-per-page"]) || -1,
            prevPage: parseInt(headers["x-prev-page"]) || -1,
            total: parseInt(headers["x-total"]) || -1,
            totalPages: parseInt(headers["x-total-pages"]) || -1,
            items: data
        }
    }

    /**
     * Parse the pagination url from PaginatedOptions
     * @param options PaginatedOptions object
     * @returns string
     */
    protected paginatedUrl(options: PaginatedOptions): string {
        let params: string[] = [];

        if(options.page) {
            params.push(`page=${options.page}`);
        }

        if(options.per_page) {
            params.push(`per_page=${options.per_page}`);
        }

        return params.length ? `?${params.join("&")}` : "";
    }
}