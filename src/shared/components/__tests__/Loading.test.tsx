import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Loading from '../Loading';
import { colors } from '../../utils/colors';

describe('Loading', () => {
    test('should match snapshot', () => {
        const container = render(<Loading />);
        expect(container).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<Loading />);
        expect(screen.getByTestId('container')).toBeTruthy();
    });

    test('should render loading', () => {
        render(<Loading />);
        expect(screen.getByTestId('loading')).toBeTruthy();
        expect(screen.getByTestId('loading').props.size).toBe('large');
        expect(screen.getByTestId('loading').props.color).toBe(colors.light.primary);
    });
});
