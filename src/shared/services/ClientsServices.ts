import { Client, ClientData, ClientDetail, ClientResponse } from '../../models/Client';
import { API_PATHS } from '../utils/apiPaths';
import networkManager from '../utils/axios/NetworkManager';

class ClientsServices {
    constructor() {}

    getClients(): Promise<ClientData> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ClientResponse>(API_PATHS.CLIENTS)
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
}
const clientServices = new ClientsServices();
export default clientServices;
