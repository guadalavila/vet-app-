import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import CardDate from '../CardDate';
import { formatDate } from '~shared/utils/date';

describe('CardDate', () => {
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const card = render(<CardDate label='Hello world!' date={new Date()} isSelected onSelected={onPressMock} />);
        expect(card).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<CardDate label='Hello world!' date={new Date()} isSelected onSelected={onPressMock} />);
        expect(screen.getByTestId('cardDate')).toBeTruthy();
    });

    test('should render texts', () => {
        render(<CardDate label='Hello world!' date={new Date()} isSelected onSelected={onPressMock} />);
        expect(screen.getByText('Hello world!')).toBeTruthy();
        expect(screen.getByText(formatDate(new Date()))).toBeTruthy();
    });

    test('should call a function when press card', () => {
        render(<CardDate label='Hello world!' date={new Date()} isSelected onSelected={onPressMock} />);
        const cardDate = screen.getByTestId('cardDate');
        fireEvent.press(cardDate);
        expect(onPressMock).toHaveBeenCalled();
    });
});
