import { Categorie } from '../../models/Categorie';

export const CATEGORIES: Categorie[] = [
    { id: 1, name: 'Clientes', page: 'ClientsScreen', icon: 'people-outline', data: 23 },
    { id: 2, name: 'Mascotas', page: 'PetsScreen', icon: 'paw-outline', data: 23 },
    { id: 3, name: 'Visitas', page: 'PetsScreen', icon: 'document-outline', data: 3 },
];

export const GENDER = [
    { label: 'Macho', value: 'male' },
    { label: 'Hembra', value: 'female' },
    { label: 'Desconocido', value: 'unknow' },
];

export const TYPE_PET = [
    { label: 'Aves', value: 'birds' },
    { label: 'Canino', value: 'canine' },
    { label: 'Equino', value: 'equine' },
    { label: 'Felino', value: 'feline' },
    { label: 'Huron', value: 'ferret' },
    { label: 'Insecto', value: 'insect' },
    { label: 'Roedor', value: 'rodent' },
    { label: 'Desconocido', value: 'unknown' },
];

export const SIZE_PET = [
    { label: 'Chico', value: 'small' },
    { label: 'Mediano', value: 'medium' },
    { label: 'Grande', value: 'big' },
    { label: 'Otro', value: 'other' },
];

export const COLOR_PET = [
    { label: 'Blanco', value: 'Blanco' },
    { label: 'Negro', value: 'Negro' },
    { label: 'Marrón', value: 'Marrón' },
    { label: 'Amarillo', value: 'Amarillo' },
    { label: 'Gris', value: 'Gris' },
    { label: 'Rojo', value: 'Rojo' },
    { label: 'Otro', value: 'Otro' },
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
