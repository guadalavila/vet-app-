import { Condition, ConditionsDataResponse, NewCondition, NewConditionResponse } from '../models/Condition';
import { NewPathology, Pathology } from '../models/Pathology';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class PathologiesServices {
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

    getPathologies(vetId: string): Promise<Pathology[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pathology[]>(`${API_PATHS.PATHOLOGIES}/${vetId}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    addPathology(pathology: NewPathology): Promise<Pathology> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Pathology>(API_PATHS.PATHOLOGIES, pathology)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
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
const pathologiesServices = new PathologiesServices();
export default pathologiesServices;
