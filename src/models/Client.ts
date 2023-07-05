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
    adress: string,
    comment: string,
    dni: string,
    email: string,
    lastName: string,
    name: string,
    phone: string,
    _id: string,
    createdAt: string,
    updatedAt: string,
};
