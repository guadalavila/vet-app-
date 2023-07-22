import { Client } from './Client';
import { GenderPet } from './GenderPet';
import { Pathology } from './Pathology';
import { SpeciePet } from './SpeciePet';
import { UserVet } from './User';

export type PetResponse = {
    data: PetData,
};

export type PetData = {
    total: number,
    count: number,
    pets: Pet[],
};

export type Pet = {
    _id: string,
    client: Client,
    name: string,
    chip?: string,
    gender: GenderPet,
    specie: SpeciePet,
    breed?: string,
    color?: string,
    size: string,
    age?: number,
    sterilized: boolean,
    pathologies?: Pathology[],
    notes?: string,
    createdAt: string,
    updatedAt: string,
    createdBy: UserVet,
};

export type NewPet = {
    createdBy: string,
    vetId: string,
    client: Client,
    name: string,
    chip?: string,
    specie: SpeciePet,
    breed?: string,
    gender: GenderPet,
    color?: string,
    size: string,
    age?: number,
    sterilized: boolean,
    pathologies?: Pathology[],
};

export type NewPetResponse = {
    data: {
        pet: Pet,
    },
};

export type SearchPetsResponse = {
    data: {
        pets: Pet[],
    },
};
