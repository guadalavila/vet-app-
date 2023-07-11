import { Condition, ConditionsDataResponse, NewCondition, NewConditionResponse } from '../models/Condition';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class ConditionsServices {
    constructor() {}

    getConditions(): Promise<Condition[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ConditionsDataResponse>(API_PATHS.CONDITIONS)
                .then((res) => {
                    resolve(res.data.data.conditions);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    addCondition(condition: NewCondition): Promise<Condition> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<NewConditionResponse>(API_PATHS.CONDITIONS, condition)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const conditionsServices = new ConditionsServices();
export default conditionsServices;
