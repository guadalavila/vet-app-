import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavigatorApp from './shared/components/NavigatorApp';
import { PathologiesContextProvider } from './contexts/PathologiesContext';
import { ErrorContextProvider } from './contexts/ErrorContext';
import { VetsContextProvider } from './contexts/VetsContext';
import { RemoteConfigContextProvider } from './contexts/RemoteConfigContext';
import AppEventsHandler from '~shared/utils/eventsHandler';
import EventsHandler from '~shared/components/EventsHandler';
export const appEventsHandler = new AppEventsHandler<{ logoutUser: undefined }>();

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <ErrorContextProvider>
                    <PathologiesContextProvider>
                        <VetsContextProvider>
                            <RemoteConfigContextProvider>
                                <EventsHandler />
                                <NavigatorApp />
                            </RemoteConfigContextProvider>
                        </VetsContextProvider>
                    </PathologiesContextProvider>
                </ErrorContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
