import {
    Client,
    ClientData,
    ClientDetail,
    ClientDetailResponse,
    ClientResponse,
    ClientSearchResponse,
    NewClient,
    NewClientResponse,
} from '../models/Client';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';
import { logCrash } from '../shared/utils/firebase/crashlytics';

class ClientsServices {
    constructor() {}

    getClients(page: number): Promise<ClientData> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientResponse>(`${API_PATHS.CLIENTS}?page=${page}&limit=20}`)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getClientsByVetId(page: number, vetId: string): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Client[]>(`${API_PATHS.CLIENTS_BY_VET}${vetId}?page=${page}&limit=20}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getAllClientsByVetId(vetId: string): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Client[]>(`${API_PATHS.ALL_CLIENTS_BY_VET}${vetId}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getClient(id: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Client>(API_PATHS.CLIENT.concat(id))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    searchClients(vetId: string, dni: string): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Client[]>(`${API_PATHS.CLIENTS_BY_VET}${vetId}${API_PATHS.SEARCH}${dni}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    searchOneClient(id: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientDetailResponse>(API_PATHS.SEARCH_ONE_CLIENT.concat(id))
                .then((res) => {
                    resolve(res.data.data.client);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    addClient(client: any): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Client>(API_PATHS.CLIENTS, client)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getClientsByDNI(dni: string): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientSearchResponse>(API_PATHS.SEARCH_CLIENTS.concat(dni))
                .then((res) => {
                    resolve(res.data.data.clients);
                })
                .catch((error) => {
                    logCrash(error);
                    reject(error);
                });
        });
    }

    updateClient(client: any): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<Client>(API_PATHS.CLIENTS, client)
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
const clientServices = new ClientsServices();
export default clientServices;
