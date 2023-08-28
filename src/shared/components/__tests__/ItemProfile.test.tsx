import { render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemProfile from '../ItemProfile';

describe('ItemProfile', () => {
    test('should match snapshot', () => {
        const container = render(<ItemProfile title='Hello' data='World!' />);
        expect(container).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemProfile title='Hello' data='World!' />);
        expect(screen.getByTestId('ItemProfile')).toBeTruthy();
    });

    test('should render title', () => {
        render(<ItemProfile title='Hello' data='World!' />);
        expect(screen.getByText('Hello')).toBeTruthy();
        expect(screen.getByText('World!')).toBeTruthy();
    });

    test('should render Separator', () => {
        render(<ItemProfile title='Hello' data='World!' />);
        expect(screen.getByTestId('separator')).toBeTruthy();
    });
});
