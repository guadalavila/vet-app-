import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Item from '../Item';
import { colors } from '../../utils/colors';

describe('Item', () => {
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const container = render(<Item label='Hello world!' onPress={onPressMock} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<Item label='Hello world!' onPress={onPressMock} />);
        expect(screen.getByText('Hello world!')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<Item label='Hello world!' onPress={onPressMock} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('chevron-forward-outline');
        expect(screen.getByTestId('icon').props.size).toBe(22);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.primary);
    });

    test('should call a function when press button', () => {
        render(<Item label='Hello world!' onPress={onPressMock} />);
        const button = screen.getByTestId('button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalled();
    });
});
