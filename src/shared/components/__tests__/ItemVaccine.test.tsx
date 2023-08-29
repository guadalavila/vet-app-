import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemVaccine from '../ItemVaccine';
import { Vaccine } from '~models/Vaccine';

describe('ItemVaccine', () => {
    const mockFn = jest.fn();
    test('should render component', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByTestId('ItemVaccine')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByText('name123')).toBeTruthy();
    });

    test('should render image', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByTestId('image')).toBeTruthy();
        expect(screen.getByTestId('image').props.source).toEqual({ testUri: '../../../assets/icon/vaccine.png' });
    });

    test('should call fn when press button', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        const button = screen.getByTestId('button');
        fireEvent.press(button);
        expect(mockFn).toHaveBeenCalled();
    });

    test('should render icon', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByTestId('icon').props.name).toEqual('pencil');
        expect(screen.getByTestId('icon').props.size).toEqual(25);
    });
});

const mockVaccine: Vaccine = {
    _id: 'some_id',
    createdBy: 'user123',
    vetId: 'vet456',
    date: new Date(),
    pet: 'pet123',
    type: 'type123',
    name: 'name123',
    brand: 'brand123',
    details: 'details123',
    createdAt: '2023-08-28',
    updatedAt: '2023-08-28',
};
