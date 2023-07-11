export type Condition = {
    name: string,
    description: string,
};

export type ConditionsDataResponse = {
    data: {
        total: number,
        count: number,
        conditions: Condition[],
    },
};
