import { ItemList } from '../../models/ItemList';

export const GENDER: ItemList[] = [
    { label: 'Macho', value: 'male', code: '', icon: { name: 'gender-male', type: 'MaterialCommunityIcons' } },
    { label: 'Hembra', value: 'female', code: '', icon: { name: 'gender-female', type: 'MaterialCommunityIcons' } },
    { label: 'Otro', value: 'other', code: '', icon: { name: 'gender-male-female', type: 'MaterialCommunityIcons' } },
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

export type ColorType = {
    label: string,
    value: string,
    code: string,
};
export const COLOR_PET: ColorType[] = [
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
