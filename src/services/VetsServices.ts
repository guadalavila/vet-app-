import { Veterinary } from '../models/Veterinary';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class VetsServices {
    constructor() {}

    getVets(): Promise<Veterinary[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Veterinary[]>(API_PATHS.VETERINARY)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

const vetsServices = new VetsServices();
export default vetsServices;
