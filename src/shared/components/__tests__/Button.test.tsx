import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Button from '../Button';

describe('Button', () => {
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const container = render(<Button title='Press me' onPress={onPressMock} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<Button title='Press me' onPress={onPressMock} />);
        expect(screen.getByTestId('button')).toBeTruthy();
    });

    test('should render correct text', () => {
        render(<Button title='Press me' onPress={onPressMock} />);
        expect(screen.getByText('Press me')).toBeTruthy();
    });

    test('should call a function when press button', () => {
        render(<Button title='Press me' onPress={onPressMock} />);
        const button = screen.getByTestId('button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalled();
    });
});
