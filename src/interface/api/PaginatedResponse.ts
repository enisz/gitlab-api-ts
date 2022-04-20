export interface PaginatedResponse<Type> {
    nextPage: number;
    page: number;
    perPage: number;
    prevPage: number;
    total: number;
    totalPages: number;
    items: Type[];
}