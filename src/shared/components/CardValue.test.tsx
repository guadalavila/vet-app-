import React from 'react';
import CardValue from './CardValue';
import { render, screen } from '@testing-library/react-native';

describe('CardValue', () => {
    test('should render component', () => {
        render(<CardValue icon={'add'} title='Hello world!' value='100' valueExtra='LoremIpsum' />);
        expect(screen.getByTestId('cardValue')).toBeTruthy();
    });
});
