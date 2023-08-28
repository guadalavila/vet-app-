import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemClient from '../ItemClient';
import { Client } from '~models/Client';

describe('ItemClient', () => {
    const mockFn = jest.fn();

    test('should match snapshot', () => {
        const container = render(<ItemClient client={mockClient} onPress={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ItemClient client={mockClient} onPress={mockFn} />);
        expect(screen.getByTestId('ItemClient')).toBeTruthy();
    });
    test('should render texts', () => {
        render(<ItemClient client={mockClient} onPress={mockFn} />);
        expect(screen.getByTestId('nameAndLastName').children).toEqual(['Juan', ' ', 'Pérez']);
    });

    test('should call fn when press component', () => {
        render(<ItemClient client={mockClient} onPress={mockFn} />);
        const component = screen.getByTestId('ItemClient');
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
