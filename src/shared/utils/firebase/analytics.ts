import analytics from '@react-native-firebase/analytics';
import { User } from '~models/User';
import { Role } from '~models/Role';
import { EventApp } from './events';

export const logScreenView = async (currentRouteName: string) => {
    try {
        await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
        });
    } catch (error) {}
};

export const logEvent = async ({ event, ...rest }: EventApp) => {
    try {
        await analytics()
            .logEvent(event, rest)
            .catch((err) => console.error({ err }));
    } catch (error) {}
};

// export const logEvent = async (eventName: string, propertyObject: any) => {
//     try {
//         await analytics()
//             .logEvent(eventName, propertyObject)
//             .catch((err) => console.error({ err }));
//     } catch (error) {}
// };

export const setUserProperties = async (user: User) => {
    const { vetId, ...rest } = user;
    const properties = Object.fromEntries<string>(Object.entries(rest));
    let userProperties = { ...properties };
    if (typeof vetId === 'object') {
        userProperties = {
            ...userProperties,
            vetId: vetId._id,
        };
    } else {
        userProperties = {
            ...userProperties,
            vetId: vetId ?? '',
        };
    }
    try {
        await analytics().setUserProperties(userProperties);
    } catch (error) {}
};

export const resetUserProperties = async () => {
    setUserProperties({
        _id: '',
        name: '',
        lastName: '',
        dni: '',
        email: '',
        role: Role.User,
        createdAt: '',
    });
};
