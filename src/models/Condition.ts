export type Condition = {
    name: string,
    description: string,
    colorCode: string,
    _id: string,
};

export type ConditionsDataResponse = {
    data: {
        total: number,
        count: number,
        conditions: Condition[],
    },
};

export type NewCondition = {
    name: string,
    description: string,
};

export type NewConditionResponse = {
    data: Condition,
};
