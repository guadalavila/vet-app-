export type UserDataResponse = {
    data: UserData,
};

export type UserData = {
    user: User,
    token: string,
};

export type User = {
    _id: string,
    email?: string,
    name: string,
    imageUrl?: string,
    role: 'user' | 'admin',
};
