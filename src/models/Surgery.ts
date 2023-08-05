import { UserVet } from './User';

export type NewSurgery = {
    createdBy: string,
    vetId: string,
    date: string | Date,
    pet: string,
    description: string,
    medicines?: string,
    notes?: string,
};

export type Surgery = {
    _id: string,
    createdBy: UserVet | string,
    vetId: string,
    date: string | Date,
    pet: string,
    description: string,
    medicines?: string,
    notes?: string,
    createdAt: string,
    updatedAt: string,
};
