import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { instance } from './setup';

class NetworkManager {
    postNoAuth<T>(url: string, data: any, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                const config = {};
                instance
                    .post(url, data, params)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error.response?.data.message);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                const configTkn = await this.getTokenAndCookies();
                instance
                    .post(url, data, configTkn)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        if (error.response?.status === 401) {
                            reject('Authorization Failed');
                        } else {
                            reject(error.response?.data.message);
                        }
                        // reject('Ocurrió un error. Por favor, intentá nuevamente más tarde.');
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    get<T>(url: string, params: any = {}): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                const configTkn = await this.getTokenAndCookies();
                instance
                    .get(url, { ...configTkn })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        if (error.response?.status === 401) {
                            reject('Authorization Failed');
                        } else {
                            reject(error.response?.data.message);
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    put<T>(url: string, data: any, config = {}): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                const configTkn = await this.getTokenAndCookies();
                instance
                    .put(url, data, { ...config, ...configTkn })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        if (error.response?.status === 401) {
                            reject('Authorization Failed');
                        } else {
                            reject(error.response?.data.message);
                        }
                        // reject('Ocurrió un error. Por favor, intentá nuevamente más tarde.');
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    delete<T>(url: string, config: {}): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                // const extraData = { Accept: 'application/json, text/plain, */*' };
                const configTkn = await this.getTokenAndCookies();
                axios
                    .delete(`${Config.API_URL}${url}`, configTkn)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((err) => {
                        if (err.response?.status === 401) {
                            reject('Authorization Failed');
                        } else {
                            reject(err.response?.data.message);
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    private async getTokenAndCookies(params?: any) {
        // const jwt = (await getData(STORAGE_KEYS.JWT)) ?? '';
        // const cookies = await getData(STORAGE_KEYS.COOKIES);

        const config: AxiosRequestConfig = {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEyYWE4ODNkM2UwZDU0NWM3MWVjMTVjIiwiaWF0IjoxNjg4NTU5OTczLCJleHAiOjE2ODg2NDYzNzN9.o2AaiiMffVmpAcf29VN__t-VjGiJqtQns3xSw3ELE1w',
                // Cookie: '',
                ...params,
            },
        };
        return config;
    }
}

const networkManager = new NetworkManager();

export default networkManager;
