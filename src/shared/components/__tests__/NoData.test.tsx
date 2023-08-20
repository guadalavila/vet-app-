import React from 'react';
import NoData from '../NoData';
import { render, screen } from '@testing-library/react-native';
import { colors } from '../../utils/colors';

describe('NoData', () => {
    test('should match snapshot', () => {
        const container = render(<NoData title='Hello' subtitle='World!' />);
        expect(container).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<NoData title='Hello' subtitle='World!' />);
        expect(screen.getByText('Hello')).toBeTruthy();
    });

    test('should render subtitle', () => {
        render(<NoData title='Hello' subtitle='World!' />);
        expect(screen.getByText('World!')).toBeTruthy();
    });

    test('should render correct icon', () => {
        render(<NoData title='Hello' subtitle='World!' />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('document-text');
        expect(screen.getByTestId('icon').props.size).toBe(80);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.greyDark);
    });

    test('should render other icon', () => {
        render(<NoData title='Hello' subtitle='World!' icon='add' />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('add');
        expect(screen.getByTestId('icon').props.size).toBe(80);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.greyDark);
    });
});
