import { NewPet, NewPetResponse, Pet, PetData, PetResponse, SearchPetsResponse } from '../../models/Pet';
import { API_PATHS } from '../utils/apiPaths';
import networkManager from '../utils/axios/NetworkManager';

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
                .post<NewPetResponse>(API_PATHS.PETS, pet)
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
