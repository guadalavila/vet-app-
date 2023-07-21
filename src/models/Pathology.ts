export type Pathology = {
    _id: string,
    name: string,
    description: string,
    vetId: string,
    colorCode: string,
};

export type NewPathology = {
    name: string,
    description?: string,
    vetId: string,
};
