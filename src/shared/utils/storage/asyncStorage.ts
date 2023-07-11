import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);

        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
};

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {}
};

export const removeAllData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {}
};

export const setMultiData = async (keyValuePairs: [string, any][]) => {
    try {
        const keys: [string, string][] = [];
        keyValuePairs.forEach((element) => {
            keys.push([element[0], JSON.stringify(element[1])]);
        });
        await AsyncStorage.multiSet(keys);
    } catch (e) {}
};

export const getMultiData = async (keys: string[]) => {
    try {
        const values = await AsyncStorage.multiGet(keys);
        return values;
    } catch (e) {}
};

export const removeMultiple = async (keys: string[]) => {
    try {
        await AsyncStorage.multiRemove(keys);
    } catch (error) {}
};
