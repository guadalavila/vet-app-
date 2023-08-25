import { render, screen } from '@testing-library/react-native';
import React from 'react';
import CardCustom from '../CardCustom';

describe('CardCustom', () => {
    test('should match snapshot', () => {
        const container = render(<CardCustom title='Sexo' value='Macho' />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<CardCustom title='Sexo' value='Macho' />);
        expect(screen.getByTestId('cardCustom')).toBeTruthy();
    });

    test('should render title', () => {
        render(<CardCustom title='Sexo' value='Macho' valueExtra='Extra' />);
        expect(screen.getByText('Sexo')).toBeTruthy();
        expect(screen.getByText('Extra')).toBeTruthy();
    });
});
