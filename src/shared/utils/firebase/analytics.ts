import analytics from '@react-native-firebase/analytics';
import { User } from '../../../models/User';
import { Role } from '../../../models/Role';

export const logScreenView = async (currentRouteName: string) => {
    try {
        await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
        });
    } catch (error) {}
};

export const logEvent = async (eventName: string, propertyObject: any) => {
    try {
        await analytics()
            .logEvent(eventName, propertyObject)
            .catch((err) => console.error({ err }));
    } catch (error) {}
};

export const setUserProperties = async (user: User) => {
    console.log(user);
    // const properties = Object.fromEntries<string>(Object.entries(user));
    try {
        // await analytics().setUserProperties(properties);
    } catch (error) {}
};

export const resetUserProperties = async () => {
    setUserProperties({
        _id: '',
        email: '',
        name: '',
        lastName: '',
        role: Role.User,
        createdAt: '',
    });
};
