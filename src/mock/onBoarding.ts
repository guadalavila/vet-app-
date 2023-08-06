export type Slider = {
    image: any,
    title: string,
    subtitle: string,
};

export const SliderOnBoarding: Slider[] = [
    {
        image: require('../../assets/images/slide_6.png'),
        title: '¡Bienvenido a VetApp!',
        subtitle:
            'Podrás gestionar la información de tus pacientes de manera eficiente y segura. Desde agregar nuevas mascotas hasta registrar visitas, cirugías y vacunas.',
    },
    {
        image: require('../../assets/images/slide_1.png'),
        title: 'Mascotas y Perfiles Detallados',
        subtitle:
            'Registra a tus pacientes en la app con sus perfiles completos. Agrega detalles como nombre, especie, raza, edad, peso y cualquier condición médica relevante.',
    },
    {
        image: require('../../assets/images/slide_3.png'),
        title: 'Historial Médico Completo',
        subtitle:
            'Accede al historial médico completo de tus mascotas en un solo lugar. Registra todas las visitas, tratamientos y procedimientos realizados',
    },
    {
        image: require('../../assets/images/slide_7.png'),
        title: 'Informes y Reportes Detallados',
        subtitle:
            'Accede a un resumen completo de tus pacientes y genera reportes detallados sobre su salud. Obtené estadísticas, gráficos y datos que te ayudarán a mejorar la eficiencia en tu práctica veterinaria y brindar un cuidado más efectivo.',
    },
];
