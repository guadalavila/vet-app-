export type ClientResponse = {
    data: ClientData,
};

export type ClientData = {
    total: number,
    count: number,
    clients: Client[],
};

export type ClientDetail = {
    data: Client,
};

export type Client = {
    _id: string,
    vetId: string,
    dni: string,
    name: string,
    lastName: string,
    email?: string,
    phone?: string,
    address?: string,
    comment?: string,
    createdAt: string,
    updatedAt: string,
};

export type NewClient = {
    vetId: string,
    dni: string,
    name: string,
    lastName: string,
    email?: string,
    address?: string,
    comment?: string,
    phone?: string,
};

export type NewClientResponse = {
    data: Client,
};

export type ClientSearchResponse = {
    data: ClientSearch,
};

export type ClientSearch = {
    clients: Client[],
};

export type ClientDetailResponse = {
    data: {
        client: Client,
    },
};
