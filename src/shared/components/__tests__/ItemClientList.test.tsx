import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemClientList from '../ItemClientList';
import { Client } from '~models/Client';
import { colors } from '~shared/utils/colors';

describe('ItemClientList', () => {
    const mockFn = jest.fn();

    test('should match snapshot', () => {
        const container = render(<ItemClientList client={mockClient} onPress={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ItemClientList client={mockClient} onPress={mockFn} />);
        expect(screen.getByTestId('ItemClientList')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<ItemClientList client={mockClient} onPress={mockFn} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('person-outline');
        expect(screen.getByTestId('icon').props.size).toBe(30);
        expect(screen.getByTestId('icon').props.color).toBe(colors.light.white);
    });

    test('should render dni', () => {
        render(<ItemClientList client={mockClient} onPress={mockFn} />);
        expect(screen.getByText('DNI: 12345678A')).toBeTruthy();
    });

    test('should render name', () => {
        render(<ItemClientList client={mockClient} onPress={mockFn} />);
        expect(screen.getByTestId('nameAndLastName').children).toEqual(['Juan', ' ', 'Pérez']);
    });

    test('should call a fn when press component', () => {
        render(<ItemClientList client={mockClient} onPress={mockFn} />);
        const component = screen.getByTestId('ItemClientList');
        fireEvent.press(component);
        expect(mockFn).toHaveBeenCalled();
    });
});

const mockClient: Client = {
    _id: '123456789',
    vetId: 'vet123',
    dni: '12345678A',
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    phone: '123-456-7890',
    address: 'Calle Falsa 123',
    comment: 'Preferred contact method: email',
    createdAt: '2023-08-26T10:00:00Z',
    updatedAt: '2023-08-26T14:30:00Z',
};
