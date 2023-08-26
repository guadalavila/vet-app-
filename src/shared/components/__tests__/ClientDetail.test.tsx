import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ClientDetail from '../ClientDetail';
import { Client } from '~models/Client';
import { colors } from '~shared/utils/colors';
import { Linking } from 'react-native';

describe('ClientDetail', () => {
    test('should match snapshot', () => {
        const container = render(<ClientDetail client={mockClient} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ClientDetail client={mockClient} />);
        expect(screen.getByTestId('ClientCard')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<ClientDetail client={mockClient} />);
        expect(screen.getByText('JP')).toBeTruthy();
        expect(screen.getByTestId('nameAndLastName').children).toEqual(['Juan', ' ', 'Pérez']);
        expect(screen.getByTestId('dni').children).toEqual(['DNI ', '12345678A']);
        expect(screen.getByTestId('email').children).toEqual(['juan@example.com']);
        expect(screen.getByTestId('address').children).toEqual(['Calle Falsa 123']);
    });

    test('should render phone and whatsapp icon', () => {
        render(<ClientDetail client={mockClient} />);
        expect(screen.getByTestId('phone-button')).toBeTruthy();
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toEqual('logo-whatsapp');
        expect(screen.getByTestId('icon').props.size).toEqual(24);
        expect(screen.getByTestId('icon').props.color).toEqual(colors.light.whatsapp);
        expect(screen.getByTestId('phone').children).toEqual(['123-456-7890']);
    });

    test('should call a function when press phone', () => {
        render(<ClientDetail client={mockClient} />);
        const button = screen.getByTestId('phone-button');
        fireEvent.press(button);
        expect(Linking.openURL).toHaveBeenCalledWith(`https://api.whatsapp.com/send?phone=${mockClient.phone}`);
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
