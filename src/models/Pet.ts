import { Client } from './Client';
import { GenderPet } from './GenderPet';
import { Pathology } from './Pathology';
import { SpeciePet } from './SpeciePet';
import { UserVet } from './User';

export type PetResponse = {
    data: PetData;
};

export type PetData = {
    total: number;
    count: number;
    pets: Pet[];
};

export type Pet = {
    _id: string;
    client: string | Client;
    name: string;
    chip?: string;
    gender: GenderPet;
    specie: SpeciePet;
    breed?: string;
    color?: string;
    size: string;
    age?: number;
    sterilized: boolean;
    pathologies?: string[] | Pathology[];
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy: UserVet | string;
};

export type NewPet = {
    createdBy: string;
    vetId: string;
    client: Client;
    name: string;
    chip?: string;
    specie: SpeciePet;
    breed?: string;
    gender: GenderPet;
    color?: string;
    size: string;
    age?: number;
    sterilized: boolean;
    pathologies?: string[];
};

export type NewPetResponse = {
    data: {
        pet: Pet;
    };
};

export type SearchPetsResponse = {
    data: {
        pets: Pet[];
    };
};
