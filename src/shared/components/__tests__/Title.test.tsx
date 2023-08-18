import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Title from '../Title';

describe('Title', () => {
    test('should match snapshot', () => {
        const title = render(<Title text='Hello' />);
        expect(title).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<Title text='Hello' />);
        expect(screen.getByText('Hello')).toBeTruthy();
    });
});
