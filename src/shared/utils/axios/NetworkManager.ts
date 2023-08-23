import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { instance } from './setup';
import { getData } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../storage/keys';

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
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject('Error de conexión');
                        } else {
                            reject('Error desconocido');
                        }
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
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject(new Error('Error de conexión'));
                        } else {
                            reject(new Error('Error desconocido'));
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
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject('Error de conexión');
                        } else {
                            reject('Error desconocido');
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
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject('Error de conexión');
                        } else {
                            reject('Error desconocido');
                        }
                        // reject('Ocurrió un error. Por favor, intentá nuevamente más tarde.');
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    patch<T>(url: string, data: any, config = {}): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                const configTkn = await this.getTokenAndCookies();
                instance
                    .patch(url, data, { ...config, ...configTkn })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject('Error de conexión');
                        } else {
                            reject('Error de desconocido');
                        }
                        // reject('Ocurrió un error. Por favor, intentá nuevamente más tarde.');
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    delete<T>(url: string, config?: {}): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
            try {
                // const extraData = { Accept: 'application/json, text/plain, */*' };
                const configTkn = await this.getTokenAndCookies();
                instance
                    .delete(url, configTkn)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        if (error.response) {
                            if (error.response.data?.message){
                                reject(error.response?.data?.message);
                            }
                        } else if (error.message.includes('Network Error')) {
                            reject('Error de conexión');
                        } else {
                            reject('Error desconocido');
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    private async getTokenAndCookies(params?: any) {
        const jwt = (await getData(STORAGE_KEYS.TOKEN)) ?? '';
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${jwt}`,
                ...params,
            },
        };
        return config;
    }
}

const networkManager = new NetworkManager();

export default networkManager;
