import { NewUser, UserResponse } from '../models/User';
import { UserData, UserDataResponse } from '../models/UserData';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class AuthServices {
    constructor() {}

    login(email: string, password: string): Promise<UserData> {
        return new Promise((resolve, reject) => {
            networkManager
                .postNoAuth<UserDataResponse>(API_PATHS.LOGIN, { email: email, password })
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    signUp(user: NewUser): Promise<UserResponse> {
        return new Promise((resolve, reject) => {
            networkManager
                .postNoAuth<UserResponse>(API_PATHS.SIGN_UP, user)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const authServices = new AuthServices();
export default authServices;
