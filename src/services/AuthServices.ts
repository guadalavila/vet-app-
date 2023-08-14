import { NewUser, User, UserResponse } from '../models/User';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';
import { logCrash } from '../shared/utils/firebase/crashlytics';

class AuthServices {
    constructor() {}

    login(email: string, password: string): Promise<UserResponse> {
        return new Promise((resolve, reject) => {
            networkManager
                .postNoAuth<UserResponse>(API_PATHS.LOGIN, { email: email, password })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error: string) => {
                    logCrash(error);
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
                    logCrash(error);
                    reject(error);
                });
        });
    }

    getMe(id: string): Promise<User> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<User>(`${API_PATHS.GET_ME}/${id}`)
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
const authServices = new AuthServices();
export default authServices;
