import { PetData, PetResponse } from '../../models/Pet';
import { API_PATHS } from '../utils/apiPaths';
import networkManager from '../utils/axios/NetworkManager';

class PetsServices {
    constructor() {}

    getPets(): Promise<PetData> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<PetResponse>(API_PATHS.PETS)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const petsServices = new PetsServices();
export default petsServices;
