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
    | 'bottom_tab'
    | 'dashboard_item'
    | 'clients_add_client'
    | 'clients_select_client'
    | 'pets_add_pet'
    | 'pets_select_pet'
    | 'petDetail_add_visit'
    | 'petDetail_show_medical_history'
    | 'petDetail_bottomSheet_edit_pet'
    | 'petDetail_bottomSheet_add_visit'
    | 'petDetail_bottomSheet_show_medical_history'
    | 'petDetail_bottomSheet_view_detail_client'
    | 'petDetail_bottomSheet_surgery_registry'
    | 'petDetail_bottomSheet_vaccines_registry';

// | 'pet-detail_show_medical_history'
// | 'pet-detail_bottomSheet_edit_pet'
// | 'pet-detail_bottomSheet_add_visit'
// | 'pet-detail_bottomSheet_show_medical_history'
// | 'pet-detail_bottomSheet_view_detail_client'

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
        action: 'saltar',
        gesture: 'swipe',
    },
    on_boarding_skip: {
        event: 'on_boarding',
        action: 'saltar',
        gesture: 'tap',
    },
    on_boarding_start: {
        event: 'on_boarding',
        action: 'comenzar',
        gesture: 'tap',
    },
    login: {
        event: 'login',
        action: 'ingresar',
        gesture: 'tap',
    },
    signUp: {
        event: 'login',
        action: 'registrarse',
        gesture: 'tap',
    },
    bottom_tab: {
        event: 'tab',
        action: '',
        gesture: 'press',
    },
    dashboard_item: {
        event: 'dashboard',
        action: '',
        gesture: 'press',
    },
    clients_add_client: {
        event: 'clients',
        action: 'nuevo cliente',
        gesture: 'press',
    },
    clients_select_client: {
        event: 'clients',
        action: 'seleccionar cliente',
        gesture: 'press',
    },
    pets_add_pet: {
        event: 'pets',
        action: 'nueva mascota',
        gesture: 'press',
    },
    pets_select_pet: {
        event: 'pets',
        action: 'seleccionar mascota',
        gesture: 'press',
    },
    petDetail_add_visit: {
        event: 'petDetail',
        action: 'agregar visita',
        gesture: 'press',
    },
    petDetail_show_medical_history: {
        event: 'petDetail',
        action: 'ver historial medico',
        gesture: 'press',
    },
    petDetail_bottomSheet_add_visit: {
        event: 'petDetail_bottomSheet',
        action: 'agregar visita',
        gesture: 'press',
    },
    petDetail_bottomSheet_edit_pet: {
        event: 'petDetail_bottomSheet',
        action: 'editar mascota',
        gesture: 'press',
    },
    petDetail_bottomSheet_show_medical_history: {
        event: 'petDetail_bottomSheet',
        action: 'ver historial medico',
        gesture: 'press',
    },
    petDetail_bottomSheet_view_detail_client: {
        event: 'petDetail_bottomSheet',
        action: 'ver detalle propietario',
        gesture: 'press',
    },
    petDetail_bottomSheet_surgery_registry: {
        event: 'petDetail_bottomSheet',
        action: 'ver registro cirugias',
        gesture: 'press',
    },
    petDetail_bottomSheet_vaccines_registry: {
        event: 'petDetail_bottomSheet',
        action: 'ver registro vacunas',
        gesture: 'press',
    },
};
