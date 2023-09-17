export type EventApp = {
    event: string;
    action: string;
    gesture: 'tap' | 'swipe' | 'press' | 'longPress' | 'scroll';
};

type EventLogin = 'login' | 'logout';

type K =
    | 'on_boarding_slide_1'
    | 'on_boarding_slide_2'
    | 'on_boarding_slide_3'
    | 'on_boarding_slide_4'
    | 'on_boarding_skip'
    | 'on_boarding_start'
    | 'login'
    | 'signUp'
    | 'bottom_tab_home'
    | 'bottom_tab_pets'
    | 'bottom_tab_clients'
    | 'bottom_tab_settings';

// type K = 'onBoardingSkip' | 'onBoardingStart' | 'login' | 'signUp' | 'newPet' | 'newClient';

export const EVENTS: { [k in K]: EventApp } = {
    on_boarding_slide_1: {
        event: 'on_boarding',
        action: 'slide1',
        gesture: 'swipe',
    },
    on_boarding_slide_2: {
        event: 'on_boarding',
        action: 'slide2',
        gesture: 'swipe',
    },
    on_boarding_slide_3: {
        event: 'on_boarding',
        action: 'slide3',
        gesture: 'swipe',
    },
    on_boarding_slide_4: {
        event: 'on_boarding',
        action: 'Saltar',
        gesture: 'swipe',
    },
    on_boarding_skip: {
        event: 'on_boarding',
        action: 'Saltar',
        gesture: 'tap',
    },
    on_boarding_start: {
        event: 'on_boarding',
        action: 'Comenzar',
        gesture: 'tap',
    },
    login: {
        event: 'login',
        action: 'Ingresar',
        gesture: 'tap',
    },
    signUp: {
        event: 'login',
        action: 'Registrarse',
        gesture: 'tap',
    },
    bottom_tab_home: {
        event: 'login',
        action: 'Registrarse',
        gesture: 'tap',
    },
};
