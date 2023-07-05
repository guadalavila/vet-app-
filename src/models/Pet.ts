export type PetResponse = {
    data: PetData;
};

export type PetData = {
    total: number;
    count: number;
    pets: Pet[];
};

export type Pet = {
    conditions: any[];
    _id: string;
    owner: string;
    name: string;
    chip: string;
    type: string;
    race: string;
    gender: string;
    color: string;
    size: string;
    age: number;
    imageURL: string;
    createdAt?: string;
    updatedAt?: string;
};
