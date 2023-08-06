import { NewSurgery, Surgery } from '../models/Surgery';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class SurgeryServices {
    constructor() {}

    addSurgery(surgery: NewSurgery): Promise<Surgery> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Surgery>(API_PATHS.SURGERY, surgery)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getSurgeriesByPet(petId: string): Promise<Surgery[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Surgery[]>(API_PATHS.SURGERIES_BY_PET.concat(petId))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const surgeryServices = new SurgeryServices();
export default surgeryServices;