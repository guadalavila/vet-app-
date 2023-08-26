import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Avatar from '../Avatar';
import { Text } from 'react-native';

describe('Avatar', () => {
    test('should match snapshot', () => {
        const avatar = render(<Avatar children={<Text>Hello!</Text>} />);
        expect(avatar).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<Avatar children={<Text>Hello!</Text>} />);
        expect(screen.getByTestId('avatar')).toBeTruthy();
    });

    test('should render correct style', () => {
        render(<Avatar children={<Text>Hello!</Text>} />);
        expect(screen.getByTestId('avatar').props.style).toEqual([
            { alignContent: 'center', alignSelf: 'center', justifyContent: 'center' },
            { backgroundColor: '#A765C1', borderRadius: 100, height: 100, width: 100 },
        ]);
        // screen.debug();
    });
});
