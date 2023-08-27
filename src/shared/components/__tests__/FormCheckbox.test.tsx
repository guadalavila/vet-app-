import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import FormCheckbox from '../FormCheckbox';
import { colors } from '~shared/utils/colors';

describe('FormCheckbox', () => {
    const mockFn = jest.fn();
    test('should render component', () => {
        render(<FormCheckbox label='Hello!' value onValueChange={mockFn} />);
        expect(screen.getByTestId('FormCheckbox')).toBeTruthy();
    });

    test('should render text', () => {
        render(<FormCheckbox label='Hello!' value onValueChange={mockFn} />);
        expect(screen.getByText('Hello!')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<FormCheckbox label='Hello!' value onValueChange={mockFn} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toEqual('checkmark');
        expect(screen.getByTestId('icon').props.color).toEqual(colors.light.success);
        expect(screen.getByTestId('icon').props.size).toEqual(22);
    });

    test('should call fn when press component', () => {
        render(<FormCheckbox label='Hello!' value onValueChange={mockFn} />);
        const btn = screen.getByTestId('FormCheckbox');
        fireEvent.press(btn);
        expect(mockFn).toHaveBeenCalled();
    });
});
