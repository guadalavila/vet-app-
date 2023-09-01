import React from 'react';
import ListColors from '../ListColors';
import { COLOR_PET } from '~shared/utils/constants';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('ListColors', () => {
    const mockFn = jest.fn();
    test('should render component', () => {
        render(<ListColors colorPet={COLOR_PET[2]} setColorPet={mockFn} />);
        expect(screen.getByTestId('list-colors')).toBeTruthy();
    });

    test('should render label color', () => {
        render(<ListColors colorPet={COLOR_PET[2]} setColorPet={mockFn} />);
        expect(screen.getByTestId('list-colors--label').children).toEqual(['Color: ', 'Marrón']);
    });

    test('should call fn when press component', () => {
        render(<ListColors colorPet={COLOR_PET[2]} setColorPet={mockFn} />);
        const button = screen.getByTestId('list-colors--button-1');
        fireEvent.press(button);
        expect(mockFn).toHaveBeenCalledWith({
            code: '#000000',
            label: 'Negro',
            value: 'Negro',
        });
    });

    test('should render icon', () => {
        render(<ListColors colorPet={COLOR_PET[2]} setColorPet={mockFn} />);
        expect(screen.getByTestId('list-colors--icon')).toBeTruthy();
        expect(screen.getByTestId('list-colors--icon').props.name).toEqual('checkmark-outline');
        expect(screen.getByTestId('list-colors--icon').props.size).toEqual(20);
        expect(screen.getByTestId('list-colors--icon').props.color).toEqual('white');
    });

    test('should render all items', () => {
        render(<ListColors colorPet={COLOR_PET[2]} setColorPet={mockFn} />);
        expect(screen.getByTestId('list-colors--button-0')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-1')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-2')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-3')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-4')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-5')).toBeTruthy();
        expect(screen.getByTestId('list-colors--button-6')).toBeTruthy();
    });
});
