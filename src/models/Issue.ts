export type Issue = {
    userId: string;
    vetId: string;
    text: string;
};

export type IssueResponse = {
    userId: string;
    vetId: string;
    text: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
};
