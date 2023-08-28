import React from 'react';
import ItemCategory from '../ItemCategory';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { colors } from '~shared/utils/colors';

describe('ItemCategory', () => {
    const mockFn = jest.fn();

    test('should match snapshot', () => {
        const container = render(<ItemCategory title='Mascotas' data={100} onPress={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ItemCategory title='Mascotas' data={100} onPress={mockFn} />);
        expect(screen.getByTestId('ItemCategory')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<ItemCategory title='Mascotas' data={100} onPress={mockFn} />);
        expect(screen.getByText('Mascotas')).toBeTruthy();
        expect(screen.getByText('100')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<ItemCategory title='Mascotas' data={100} onPress={mockFn} icon='add' />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toEqual('add');
        expect(screen.getByTestId('icon').props.size).toEqual(38);
        expect(screen.getByTestId('icon').props.color).toEqual(colors.light.primary);
    });

    test('should call a fn when press component', () => {
        render(<ItemCategory title='Mascotas' data={100} onPress={mockFn} icon='add' />);
        const button = screen.getByTestId('ItemCategory');
        fireEvent.press(button);
        expect(mockFn).toHaveBeenCalled();
    });
});
