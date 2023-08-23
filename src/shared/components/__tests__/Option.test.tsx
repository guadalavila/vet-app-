import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Option from '../Option';
import { colors } from '~shared/utils/colors';

describe('Option', () => {
    test('should match snapshot', () => {
        const container = render(<Option label='Lorem Ipsum' icon='add' onPress={onPressMock} />);
        expect(container).toMatchSnapshot();
    });

    const onPressMock = jest.fn();

    test('should render correct label ', () => {
        render(<Option label='Lorem Ipsum' icon='add' onPress={onPressMock} />);
        expect(screen.getByText('Lorem Ipsum')).toBeTruthy();
    });

    test('should render correct icon ', () => {
        render(<Option label='Lorem Ipsum' icon='add' onPress={onPressMock} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('add');
        expect(screen.getByTestId('icon').props.size).toBe(24);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.greyDark);
    });

    test('should call a function when press button', () => {
        render(<Option label='Lorem Ipsum' icon='add' onPress={onPressMock} />);
        const button = screen.getByTestId('button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalled();
    });
});
