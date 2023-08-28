import { render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemColor from '../ItemColor';

describe('ItemColor', () => {
    test('should match snapshot', () => {
        const container = render(<ItemColor size={33} color='black' />);
        expect(container).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemColor size={33} color='black' />);
        expect(screen.getByTestId('ItemColor')).toBeTruthy();
    });

    test('should render correct styles', () => {
        render(<ItemColor size={33} color='black' />);
        expect(screen.getByTestId('ItemColor').props.style).toEqual([
            {},
            { backgroundColor: 'black', borderRadius: 33, height: 33, width: 33 },
        ]);
    });
});
