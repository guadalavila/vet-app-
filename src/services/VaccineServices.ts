import { NewVaccine, Vaccine } from '../models/Vaccine';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class VaccineServices {
    constructor() {}

    addVaccine(vaccine: NewVaccine): Promise<Vaccine> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Vaccine>(API_PATHS.VACCINE, vaccine)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const vaccineServices = new VaccineServices();
export default vaccineServices;
