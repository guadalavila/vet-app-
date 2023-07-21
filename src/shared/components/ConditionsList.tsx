import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './Title';
import Badge from './Badge';
import { getRandomColor } from '../utils/helpers';
import { size } from '../utils/size';
import { PathologiesContext } from '../../contexts/PathologiesContext';

interface IConditionsListProps {
    conditions: string[];
}

const ConditionsList = ({ conditions }: IConditionsListProps) => {
    const { pathologies } = useContext(PathologiesContext);

    const getConditionColorCode = (name: string) => {
        return pathologies.find((x) => name === x.name)?.colorCode ?? getRandomColor();
    };
    return (
        <>
            <Title text='Patología/s preexistentes:' />
            <View style={styles.containerConditions}>
                {conditions.map((item) => (
                    <Badge key={item} label={item} color={getConditionColorCode(item)} />
                ))}
            </View>
        </>
    );
};

export default ConditionsList;

const styles = StyleSheet.create({
    containerConditions: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: size.L,
    },
});
