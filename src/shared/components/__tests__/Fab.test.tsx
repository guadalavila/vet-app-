import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Fab from '../Fab';
import { colors } from '../../utils/colors';

describe('Fab', () => {
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const container = render(<Fab onPress={onPressMock} />);
        expect(container).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<Fab onPress={onPressMock} />);
        expect(screen.getByTestId('container')).toBeTruthy();
        screen.debug();
    });

    test('should render icon', () => {
        render(<Fab onPress={onPressMock} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('add');
        expect(screen.getByTestId('icon').props.size).toBe(40);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.grey);
    });

    test('should render other icon', () => {
        render(<Fab onPress={onPressMock} icon='people' />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('people');
        expect(screen.getByTestId('icon').props.size).toBe(40);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.grey);
    });

    test('should call a function when press FAB', () => {
        render(<Fab onPress={onPressMock} />);
        const container = screen.getByTestId('container');
        fireEvent.press(container);
        expect(onPressMock).toHaveBeenCalled();
    });
});
