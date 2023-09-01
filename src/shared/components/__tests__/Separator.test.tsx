import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Separator from '../Separator';

describe('Separator', () => {
    test('should render component', () => {
        render(<Separator testID='separator' />);
        expect(screen.getByTestId('separator')).toBeTruthy();
    });

    test('should render component with props', () => {
        render(<Separator testID='separator' color='#007cad' />);
        expect(screen.getByTestId('separator').props.style).toEqual([
            { borderWidth: 0.4, marginVertical: 6 },
            { borderColor: '#007cad' },
        ]);
    });
});
