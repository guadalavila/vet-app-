import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { useState } from 'react';
import Input from '../Input';

describe('Input', () => {
    const value = '';
    const setValueMock = jest.fn();
    test('should render component', () => {
        render(<Input placeholder='Name' value={value} setValue={setValueMock} />);
        expect(screen.getByTestId('textInput')).toBeTruthy();
    });

    test('should render TextInput', () => {
        render(<Input placeholder='Name' value={value} setValue={setValueMock} secureText />);
        expect(screen.getByTestId('textInput').props.placeholder).toBe('Name');
        expect(screen.getByTestId('textInput').props.value).toBe('');
        expect(screen.getByTestId('textInput').props.placeholderTextColor).toBeTruthy();
        expect(screen.getByTestId('textInput').props.secureTextEntry).toBeTruthy();
    });

    // test('updates value on text change', () => {
    //     const { getByTestId } = render(<Input placeholder='Name' value={value} setValue={setValueMock} />);
    //     const input = getByTestId('textInput');
    //     fireEvent.changeText(input, 'New Value');
    //     expect(input.props.value).toBe('New Value');
    // });
});
