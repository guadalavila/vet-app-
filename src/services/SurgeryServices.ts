import { NewSurgery, Surgery } from '~models/Surgery';
import { API_PATHS } from '~shared/utils/apiPaths';
import networkManager from '~shared/utils/axios/NetworkManager';
import { logCrash } from '~shared/utils/firebase/crashlytics';

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
                    logCrash(error, 'SurgeryServices => addSurgery()', 'POST');
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
                    logCrash(error, `SurgeryServices => getSurgeriesByPet() with petId: ${petId}}`, 'GET');
                    reject(error);
                });
        });
    }
}
const surgeryServices = new SurgeryServices();
export default surgeryServices;
