import { Pet } from './Pet';
import { UserVet } from './User';

export type VisitResponse = {
    data: {
        visits: Visit[];
    };
};

export type NewVisit = {
    createdBy: string;
    vetId: string;
    date: string | Date;
    pet: string;
    weight: number;
    temperature: number;
    anamnestic: string;
    diagnosis?: string;
    treatment?: string;
    hospitalization?: string;
    symptoms?: string;
};

export type Visit = {
    _id: string;
    createdBy: UserVet | string;
    vetId: string;
    date: string | Date;
    pet: string;
    weight: number;
    temperature: number;
    anamnestic: string;
    diagnosis?: string;
    treatment?: string;
    hospitalization?: string;
    symptoms?: string;
    createdAt: string;
    updatedAt: string;
};

export type NewVisitResponse = {
    data: Visit;
};

export type VisitDetailResponse = {
    data: {
        visit: Visit;
    };
};

export type LastVisit = {
    _id: string;
    createdBy: UserVet | string;
    vetId: string;
    date: string | Date;
    pet: Pet;
    weight: number;
    temperature: number;
    anamnestic: string;
    diagnosis?: string;
    treatment?: string;
    hospitalization?: string;
    symptoms?: string;
    createdAt: string;
    updatedAt: string;
};
