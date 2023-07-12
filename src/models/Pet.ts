export type PetResponse = {
    data: PetData,
};

export type PetData = {
    total: number,
    count: number,
    pets: Pet[],
};

export type Pet = {
    conditions: string[],
    _id: string,
    owner: string,
    name: string,
    chip: string,
    type: string,
    race: string,
    gender: string,
    color: string,
    size: string,
    age: number,
    imageURL: string,
    sterilized: boolean,
    createdAt?: string,
    updatedAt?: string,
};

export type NewPet = {
    owner: string,
    name: string,
    chip: string,
    type: string,
    race: string,
    gender: string,
    color: string,
    size: string,
    age: number,
    sterilized: boolean,
    conditions: string[],
};

export type NewPetResponse = {
    data: Pet,
};

export type SearchPetsResponse = {
    data: {
        pets: Pet[],
    },
};
