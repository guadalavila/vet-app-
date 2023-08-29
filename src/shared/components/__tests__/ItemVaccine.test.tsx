import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { ReactNode, createContext } from 'react';
import ItemVaccine from '../ItemVaccine';
import { Vaccine } from '~models/Vaccine';
import { colors } from '~shared/utils/colors';

describe('ItemVaccine', () => {
    const mockFn = jest.fn();
    test('should render component', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByTestId('ItemVaccine')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByText('name123')).toBeTruthy();
        expect(screen.getByText('Tipo: type123')).toBeTruthy();
        expect(screen.getByText('Marca: brand123')).toBeTruthy();
        expect(screen.getByText('Detalle: details123')).toBeTruthy();
    });

    test('should render date', () => {
        render(<ItemVaccine vaccine={mockVaccine} onPress={mockFn} />);
        expect(screen.getByTestId('date')).toBeTruthy();
        expect(screen.getByTestId('date').children).toContain(
            new Date().toLocaleString('en-GB', {
                hour12: false,
            }),
        );
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

    test('should render correct style in dark mode', () => {
        render(
            <FakeDarkThemeProvider>
                <ItemVaccine vaccine={mockVaccine} onPress={mockFn} />
            </FakeDarkThemeProvider>,
        );
        expect(screen.getByTestId('icon').props.name).toEqual('pencil');
        expect(screen.getByTestId('icon').props.size).toEqual(25);
        expect(screen.getByTestId('icon').props.color).toEqual(colors.light.white);
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

export const FakeThemeContext = createContext({
    theme: 'light',
});

export const FakeThemeContextDark = createContext({
    theme: 'dark',
});
interface FakeThemeProviderProps {
    children: ReactNode;
}

export const FakeThemeProvider: React.FC<FakeThemeProviderProps> = ({ children }) => {
    return <FakeThemeContext.Provider value={{ theme: 'light' }}>{children}</FakeThemeContext.Provider>;
};

export const FakeDarkThemeProvider: React.FC<FakeThemeProviderProps> = ({ children }) => {
    return <FakeThemeContextDark.Provider value={{ theme: 'dark' }}>{children}</FakeThemeContextDark.Provider>;
};
