import { Condition, ConditionsDataResponse } from '../../models/Condition';
import { API_PATHS } from '../utils/apiPaths';
import networkManager from '../utils/axios/NetworkManager';

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
}
const conditionsServices = new ConditionsServices();
export default conditionsServices;
