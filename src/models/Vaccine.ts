import { UserVet } from './User';

export type NewVaccine = {
    createdBy: string,
    vetId: string,
    date: string | Date,
    pet: string,
    type: string,
    name: string,
    brand?: string,
    details?: string,
};

export type Vaccine = {
    _id: string,
    createdBy: UserVet | string,
    vetId: string,
    date: string | Date,
    pet: string,
    type: string,
    name: string,
    brand?: string,
    details?: string,
    createdAt: string,
    updatedAt: string,
};
