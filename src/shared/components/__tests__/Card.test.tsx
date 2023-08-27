import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Card from '../Card';
import { Text } from 'react-native';

describe('Card', () => {
    test('should render component', () => {
        render(
            <Card testID='card'>
                <Text>Hello World!</Text>
            </Card>,
        );
        expect(screen.getByTestId('card')).toBeTruthy();
    });

    test('should render child', () => {
        render(
            <Card testID='card'>
                <Text>Hello World!</Text>
            </Card>,
        );
        expect(screen.getByText('Hello World!')).toBeTruthy();
    });
});
