import { Role } from './Role';
import { Veterinary } from './Veterinary';

export type NewUser = {
    name: string,
    lastName: string,
    dni: string,
    email: string,
    password: string,
    role: Role,
    vetId?: string,
    phone?: string,
};

export type User = {
    _id: string,
    name: string,
    lastName: string,
    dni: string,
    email: string,
    role: Role,
    vetId?: string | Veterinary,
    createdAt: string,
    phone?: string,
};

export type UserResponse = {
    user: User,
    token: string,
};

export type UserVet = {
    _id: string,
    name: string,
    lastName: string,
    email: string,
};
