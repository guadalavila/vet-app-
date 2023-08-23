import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Slide from '../Slide';
import { SliderOnBoarding } from '~mock/onBoarding';

describe('Slide', () => {
    const onPressMock = jest.fn();
    const subtitle =
        'Accede a un resumen completo de tus pacientes y genera reportes detallados sobre su salud. Obtené estadísticas, gráficos y datos que te ayudarán a mejorar la eficiencia en tu práctica veterinaria y brindar un cuidado más efectivo.';
    test('should render component', () => {
        render(
            <Slide
                item={SliderOnBoarding[3]}
                index={3}
                totalSlider={3}
                onHandleDismiss={onPressMock}
                textButton='Hello World'
            />,
        );
        expect(screen.getByTestId('slide')).toBeTruthy();
    });

    test('should render texts', () => {
        render(
            <Slide
                item={SliderOnBoarding[3]}
                index={3}
                totalSlider={3}
                onHandleDismiss={onPressMock}
                textButton='Hello World'
            />,
        );
        expect(screen.getByText('Informes y Reportes Detallados')).toBeTruthy();
        expect(screen.getByText(subtitle)).toBeTruthy();
    });
});
