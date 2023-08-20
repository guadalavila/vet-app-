import { User } from '../models/User';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';
import { logCrash } from '../shared/utils/firebase/crashlytics';

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
                    logCrash(error, 'UsersServices => getUsers()', 'GET');
                    reject(error);
                });
        });
    }
    updateUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<User>(API_PATHS.USER_UPDATE, user)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, 'UsersServices => updateUser()', 'PATCH');
                    reject(error);
                });
        });
    }
}

const usersServices = new UsersServices();
export default usersServices;
