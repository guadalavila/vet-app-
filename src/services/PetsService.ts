import { NewPet, NewPetResponse, Pet, PetData, PetResponse, SearchPetsResponse } from '../models/Pet';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

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
                    reject(error);
                });
        });
    }

    getPetsByClient(dni: string): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<SearchPetsResponse>(`${API_PATHS.PETS_BY_CLIENT}${dni}`)
                .then((res) => {
                    resolve(res.data.data.pets);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getPetsByVetId(vetId: string, page: number): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Pet[]>(`${API_PATHS.PETS}/${vetId}?page=${page.toString()}&limit=50}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    searchPets(text: string): Promise<Pet[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<PetResponse>(API_PATHS.SEARCH_PETS.concat(text))
                .then((res) => {
                    resolve(res.data.data.pets);
                })
                .catch((error) => {
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
                    console.log(error);
                    reject(error);
                });
        });
    }

    updatePet(pet: Pet): Promise<Pet> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<NewPetResponse>(`${API_PATHS.PETS}/${pet._id}`, pet)
                .then((res) => {
                    resolve(res.data.data.pet);
                })
                .catch((error) => {
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
}
const petsServices = new PetsServices();
export default petsServices;
