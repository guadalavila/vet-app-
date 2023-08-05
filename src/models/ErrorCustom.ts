export type ErrorCustom = {
    isError: boolean,
    message: string,
    type?: 'success' | 'warning' | 'error' | 'default',
};
