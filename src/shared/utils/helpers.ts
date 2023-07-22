import { colors } from './colors';
import { COLOR_PET } from './constants';

const mapPetSpecie = () => {
    const mapGender = new Map();
    mapGender.set('canine', 'Canino');
    mapGender.set('feline', 'Felino');
    mapGender.set('equine', 'Equino');
    mapGender.set('bird', 'Aves');
    mapGender.set('rabbit', 'Conejo');
    mapGender.set('porcine', 'Porcino');
    mapGender.set('ferret', 'Huron');
    mapGender.set('insect', 'Insecto');
    mapGender.set('rodent', 'Roedor');
    mapGender.set('other', 'Otro');
    mapGender.set('', '');
    return mapGender;
};

export const getSpeciePet = (specie: string) => mapPetSpecie().get(specie);

const mapPetSize = () => {
    const mapSize = new Map();
    mapSize.set('small', 'Chico');
    mapSize.set('medium', 'Mediano');
    mapSize.set('big', 'Grande');
    mapSize.set('other', 'Otro');
    mapSize.set('', '');
    return mapSize;
};

export const getPetSize = (size: string) => {
    return mapPetSize().get(size);
};

const mapPetGender = () => {
    const mapGender = new Map();
    mapGender.set('male', 'Macho');
    mapGender.set('female', 'Hembra');
    mapGender.set('unknow', 'Desconocido');
    mapGender.set('', '');
    return mapGender;
};

export const getPetGender = (gender: string) => {
    return mapPetGender().get(gender);
};

export function getConditionColor(condition: string): string {
    const conditionColorMap = new Map();
    conditionColorMap.set('Ciego', '#FFBF00');
    conditionColorMap.set('Sordo', '#FF7F50');
    conditionColorMap.set('Asmatico', '#593c8f');
    conditionColorMap.set('Preñez', '#40E0D0');
    conditionColorMap.set('Pancreatitis Cronica', '#6495ED');
    conditionColorMap.set('Sobrepeso', '#78c091');
    conditionColorMap.set('Alérgico', '#9a348e');
    conditionColorMap.set('Insulinodependiente', '#00B295');
    conditionColorMap.set('Hepatico', '#4281a4');
    conditionColorMap.set('Diabetico', '#e57a44');
    conditionColorMap.set('Obeso', '#afa2ff');
    conditionColorMap.set('Renal', '#f56416');
    return conditionColorMap.get(condition);
}

export const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const getCodeColor = (name: string) => {
    return COLOR_PET.find((x) => x.value === name)?.code || colors.light.greyDark;
};
