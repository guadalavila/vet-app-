import { render, screen } from '@testing-library/react-native';
import React from 'react';
import ConditionsList from '../ConditionsList';

describe('ConditionList', () => {
    test('should match snapshot', () => {
        const container = render(<ConditionsList conditions={['Ciego', 'Sordo']} />);
        expect(container).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ConditionsList conditions={['Ciego', 'Sordo']} />);
        expect(screen.getByText('Patología/s preexistentes:')).toBeTruthy();
        expect(screen.getByText('Ciego')).toBeTruthy();
        expect(screen.getByText('Sordo')).toBeTruthy();
        // screen.debug();
        expect(screen.getByTestId('Ciego').props.style).toEqual([
            { color: '#11100F', fontSize: 16 },
            { color: '#11100F', fontWeight: '600' },
        ]);
        expect(screen.getByTestId('Sordo').props.style).toEqual([
            { color: '#11100F', fontSize: 16 },
            { color: '#11100F', fontWeight: '600' },
        ]);
    });
});
