type CONFIG_MONTHS_DAYS_PROPS = {
    monthNames: string[],
    monthNamesShort: string[],
    dayNames: string[],
    dayNamesShort: string[],
    today: string,
};

const monthNames: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

const monthNamesShort: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const dayNames: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const dayNamesShort: string[] = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

const today: string = 'Hoy';

export const LOCALE_CONFIG = 'es';

export const CONFIG_MONTHS_DAYS: CONFIG_MONTHS_DAYS_PROPS = {
    monthNames,
    monthNamesShort,
    dayNames,
    dayNamesShort,
    today,
};
