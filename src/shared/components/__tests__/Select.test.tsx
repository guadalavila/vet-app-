import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Select from '../Select';
import { colors } from '~shared/utils/colors';

describe('Select', () => {
    const mockFn = jest.fn();
    test('should render component', () => {
        render(<Select title='Dark Theme' selected onChangeSelect={mockFn} />);
        expect(screen.getByTestId('select')).toBeTruthy();
    });

    test('should render text', () => {
        render(<Select title='Dark Theme' selected onChangeSelect={mockFn} />);
        expect(screen.getByText('Dark Theme')).toBeTruthy();
    });

    test('should render switch', () => {
        render(<Select title='Dark Theme' selected onChangeSelect={mockFn} />);
        expect(screen.getByTestId('switch')).toBeTruthy();
        expect(screen.getByTestId('switch').props.value).toBeTruthy();
    });

    test('should call a function when press switch', () => {
        render(<Select title='Dark Theme' selected onChangeSelect={mockFn} />);
        const switch_ = screen.getByTestId('switch');
        // screen.debug();
    });
});
