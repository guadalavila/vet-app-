import { Role } from './Role';
import { Veterinary } from './Veterinary';

export type NewUser = {
    name: string,
    lastName: string,
    email: string,
    password: string,
    role: Role,
    vetId?: string,
};

export type User = {
    _id: string,
    name: string,
    lastName: string,
    email: string,
    role: Role,
    vetId?: Veterinary,
    createdAt: string,
};

export type UserResponse = {
    user: User,
    token: string,
};
