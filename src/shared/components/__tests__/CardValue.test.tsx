import React from 'react';
import CardValue from '../CardValue';
import { render, screen } from '@testing-library/react-native';
import { colors } from '~shared/utils/colors';

describe('CardValue', () => {
    test('should render component', () => {
        render(<CardValue icon={'add'} title='Hello world!' value='100' valueExtra='LoremIpsum' />);
        expect(screen.getByTestId('cardValue')).toBeTruthy();
    });

    test('should render correct texts', () => {
        render(<CardValue icon={'add'} title='Hello!' value='world!' valueExtra='LoremIpsum' />);
        expect(screen.getByText('Hello!')).toBeTruthy();
        expect(screen.getByText('LoremIpsum')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<CardValue icon={'add'} title='Hello!' value='world!' valueExtra='LoremIpsum' />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toEqual('add');
        expect(screen.getByTestId('icon').props.size).toEqual(20);
        expect(screen.getByTestId('icon').props.color).toEqual(colors.light.white);
    });
});
