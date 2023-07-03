const mapPetType = () => {
    const mapGender = new Map();
    mapGender.set('birds', 'Aves');
    mapGender.set('canine', 'Canino');
    mapGender.set('equine', 'Equino');
    mapGender.set('feline', 'Felino');
    mapGender.set('ferret', 'Huron');
    mapGender.set('insect', 'Insecto');
    mapGender.set('rodent', 'Roedor');
    mapGender.set('unknown', 'Desconocido');
    mapGender.set('', '');
    return mapGender;
};

export const getPetType = (type: string) => {
    return mapPetType().get(type);
};

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
