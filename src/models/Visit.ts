export type VisitResponse = {
    data: {
        visits: Visit[],
    },
};

export type Visit = {
    anamnestic: string,
    client: string,
    createdAt: string,
    date: string | Date,
    diagnosis: string,
    hospitalization: string,
    pet: string,
    temperature: number,
    treatment: string,
    updatedAt: string,
    weight: number,
    _id: string,
};

export type NewVisitResponse = {
    data: Visit,
};

export type NewVisit = {
    anamnestic: string,
    client: string,
    date: string | Date,
    diagnosis: string,
    hospitalization: string,
    pet: string,
    temperature: number,
    treatment: string,
    weight: number,
};
