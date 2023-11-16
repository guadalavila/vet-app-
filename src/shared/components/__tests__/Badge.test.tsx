import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Badge from '../Badge';

describe('Badge', () => {
    test('should match snapshot', () => {
        const banner = render(<Badge label='Hello world' />);
        expect(banner).toMatchSnapshot();
    });

    test('should render text correct', () => {
        render(<Badge label='Hello world' />);
        expect(screen.getByText('Hello world')).toBeTruthy();
    });

    test('should render text styles correct', () => {
        render(<Badge label='Hello world' />);
        expect(screen.getByText('Hello world').props.style).toEqual([
            { color: '#11100F', fontSize: 16 },
            { color: '#11100F', fontWeight: '600' },
        ]);
    });

    test('should render correct color', () => {
        render(<Badge label='Hello world' color='#007cad' />);
        expect(screen.getByTestId('container-text')).toBeTruthy();
        expect(screen.getByTestId('container-text').props.style).toEqual([
            { borderRadius: 12, margin: 6, padding: 6 },
            { backgroundColor: '#007cad' },
        ]);
    });
});
