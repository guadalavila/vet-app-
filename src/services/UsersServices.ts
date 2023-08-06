import { User } from '../models/User';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class UsersServices {
    constructor() {}

    getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<User[]>(API_PATHS.USERS)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

const usersServices = new UsersServices();
export default usersServices;
