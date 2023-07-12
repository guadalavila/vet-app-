import analytics from '@react-native-firebase/analytics';
import { User } from '../../../models/UserData';

export const logScreenView = async (currentRouteName: string) => {
    if (currentRouteName) {
        try {
            await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName,
            });
        } catch (error) {}
    }
};

export const logEvent = async (eventName: string, propertyObject: any) => {
    try {
        await analytics()
            .logEvent(eventName, propertyObject)
            .catch((err) => console.error({ err }));
    } catch (error) {}
};

export const setUserProperties = async (user: User) => {
    const properties = Object.fromEntries<string>(Object.entries(user));
    try {
        await analytics().setUserProperties(properties);
    } catch (error) {}
};

export const resetUserProperties = async () => {
    setUserProperties({
        _id: '',
        email: '',
        name: '',
        role: 'user',
    });
};