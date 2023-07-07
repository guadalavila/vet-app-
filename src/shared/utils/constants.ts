import { Categorie } from '../../models/Categorie';

export const CATEGORIES: Categorie[] = [
    { id: 1, name: 'Clientes', page: 'ClientsScreen', icon: 'people-outline', data: 23 },
    { id: 2, name: 'Mascotas', page: 'PetsScreen', icon: 'paw-outline', data: 23 },
    { id: 3, name: 'Visitas', page: 'PetsScreen', icon: 'document-outline', data: 3 },
];

export const GENDER = [
    { label: 'Macho', value: 'male', code: '' },
    { label: 'Hembra', value: 'female', code: '' },
    { label: 'Desconocido', value: 'unknow', code: '' },
];

export type PetType = {
    label: string,
    value: string,
    image: any,
};

export const TYPE_PET: PetType[] = [
    { label: 'Canino', value: 'canine', image: require('../../../assets/images/dog.png') },
    { label: 'Felino', value: 'feline', image: require('../../../assets/images/cat.png') },
    { label: 'Equino', value: 'equine', image: require('../../../assets/images/horse.png') },
    { label: 'Aves', value: 'birds', image: require('../../../assets/images/bird.png') },
    { label: 'Huron', value: 'ferret', image: require('../../../assets/images/ferret.png') },
    { label: 'Insecto', value: 'insect', image: require('../../../assets/images/insect.png') },
    { label: 'Roedor', value: 'rodent', image: require('../../../assets/images/mouse.png') },
    { label: 'Desconocido', value: 'unknown', image: require('../../../assets/images/unknow.png') },
];

export const SIZE_PET = [
    { label: 'Chico', value: 'small', code: 'S' },
    { label: 'Mediano', value: 'medium', code: 'M' },
    { label: 'Grande', value: 'big', code: 'XL' },
    { label: 'Otro', value: 'other', code: '' },
];

export const COLOR_PET = [
    { label: 'Blanco', value: 'Blanco', code: '#FFFFFF' },
    { label: 'Negro', value: 'Negro', code: '#000000' },
    { label: 'Marrón', value: 'Marrón', code: '#734516' },
    { label: 'Amarillo', value: 'Amarillo', code: '#EED93C' },
    { label: 'Gris', value: 'Gris', code: '#8C8C8C' },
    { label: 'Rojo', value: 'Rojo', code: '#8F1818' },
    { label: 'Otro', value: 'Otro', code: 'transparent' },
];

export const CONDITIONS = [
    { label: 'Ciego', value: 'Ciego' },
    { label: 'Sordo', value: 'Sordo' },
    { label: 'Asmatico', value: 'Asmatico' },
    { label: 'Pancreatitis Cronica', value: 'Pancreatitis Cronica' },
    { label: 'Sobrepeso', value: 'Sobrepeso' },
    { label: 'Alérgico', value: 'Alérgico' },
    { label: 'Insulinodependiente', value: 'Insulinodependiente' },
    { label: 'Hepatico', value: 'Hepatico' },
    { label: 'Diabetico', value: 'Diabetico' },
    { label: 'Obeso', value: 'Obeso' },
    { label: 'Renal', value: 'Renal' },
];

export const CATEGORIES_DASHBOARD = [
    {
        id: 1,
        name: 'Clientes',
        page: 'ClientsScreen',
        icon: 'people-outline',
    },
    {
        id: 2,
        name: 'Mascotas',
        page: 'PetsScreen',
        icon: 'paw-outline',
    },
    {
        id: 3,
        name: 'Visitas',
        page: 'PetsScreen',
        icon: 'document-outline',
        height: 200,
    },
];
