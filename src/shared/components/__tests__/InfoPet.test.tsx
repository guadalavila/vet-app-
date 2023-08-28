import { render, screen } from '@testing-library/react-native';
import React from 'react';
import InfoPet from '../InfoPet';

describe('InfoPet', () => {
    test('should match snapshot', () => {
        const container = render(<InfoPet label='Nombre' info='Boby' />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<InfoPet label='Nombre' info='Boby' />);
        expect(screen.getByTestId('InfoPet')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<InfoPet label='Nombre' info='Boby' />);
        expect(screen.getByText('Nombre:')).toBeTruthy();
        expect(screen.getByText('Boby')).toBeTruthy();
    });
});
