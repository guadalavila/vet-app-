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
                    reject(error);
                });
        });
    }

    getClient(id: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientDetail>(API_PATHS.CLIENT.concat(id))
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    searchClients(text: string): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientSearchResponse>(API_PATHS.SEARCH_CLIENTS.concat(text))
                .then((res) => {
                    resolve(res.data.data.clients);
                })
                .catch((error) => {
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

    addClient(client: NewClient): Promise<Client> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<ClientDetailResponse>(API_PATHS.CLIENTS, client)
                .then((res) => {
                    resolve(res.data.data.client);
                })
                .catch((error) => {
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
                    reject(error);
                });
        });
    }
}
const clientServices = new ClientsServices();
export default clientServices;
