import { render, screen } from '@testing-library/react-native';
import React from 'react';
import CustomText from '../CustomText';

describe('CustomText', () => {
    test('should match snapshot', () => {
        const customText = render(<CustomText testID='custom-text'>Hello World!</CustomText>);
        expect(customText).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<CustomText testID='custom-text'>Hello World!</CustomText>);
        expect(screen.getByTestId('custom-text')).toBeTruthy();
        expect(screen.getByTestId('custom-text').children).toEqual(['Hello World!']);
    });
});
