import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    shadowCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
});
