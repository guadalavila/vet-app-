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

    updateVaccine(vaccine: Vaccine): Promise<Vaccine> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<Vaccine>(API_PATHS.VACCINE, vaccine)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getVaccinesByPet(petId: string): Promise<Vaccine[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Vaccine[]>(API_PATHS.VACCINE_BY_PET.concat(petId))
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
