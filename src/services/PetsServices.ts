import { NewPet, Pet, PetData, PetResponse } from '../models/Pet';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';
import { logCrash } from '../shared/utils/firebase/crashlytics';

class PetsServices {
    constructor() {}

    getPets(page: number): Promise<PetData> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<PetResponse>(`${API_PATHS.PETS}?page=${page.toString()}&limit=50}`)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getPetsByClient(dni: string): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet[]>(`${API_PATHS.PETS_BY_CLIENT}${dni}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getPetsByVetId(vetId: string, page: number): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet[]>(`${API_PATHS.PETS_BY_VET}${vetId}?page=${page.toString()}&limit=50}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getAllPetsByVetId(vetId: string): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet[]>(`${API_PATHS.ALL_PETS_BY_VET}${vetId}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    searchPets(vetId: string, text: string): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet[]>(`${API_PATHS.PETS_BY_VET}${vetId}${API_PATHS.SEARCH}${text}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    addPet(pet: NewPet): Promise<Pet> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Pet>(API_PATHS.PETS, pet)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    updatePet(pet: Pet): Promise<Pet> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<Pet>(API_PATHS.PETS, pet)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    deletePet(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            networkManager
                .delete(`${API_PATHS.PETS}/${id}}`)
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    getDetailPet(petId: string): Promise<Pet> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet>(API_PATHS.ONE_PET.concat(petId))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }
}
const petsServices = new PetsServices();
export default petsServices;
