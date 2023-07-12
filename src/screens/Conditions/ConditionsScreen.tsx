import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import Fab from '../../shared/components/Fab';
import CustomText from '../../shared/components/CustomText';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import useConditions from '../../shared/hooks/useConditions';
import Loading from '../../shared/components/Loading';
import ModalInput from '../../shared/components/ModalInput';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ConditionsScreen'> {}

const ConditionsScreen = ({}: Props) => {
    const { loading, conditions, refreshData, saving, addCondition } = useConditions();
    const [showModalInput, setShowModalInput] = useState(false);

    const onRefresh = useCallback(() => {
        refreshData();
    }, []);

    const handleAddCondition = (name: string) => {
        addCondition({ name, description: '' }).then(() => {
            setShowModalInput(false);
            refreshData();
        });
    };

    return (
        <Container>
            <Header title='Condiciones' buttonBack />
            <View style={styles.containerInformation}>
                <CustomText style={styles.textInformation}>
                    En esta sección podrás administrar las precondiciones de una mascota.
                </CustomText>
            </View>
            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={conditions}
                    renderItem={({ item }) => (
                        <View style={styles.conditionItem}>
                            <View style={[styles.color, { backgroundColor: item.colorCode }]} />
                            <CustomText style={styles.textItem}>{item.name}</CustomText>
                        </View>
                    )}
                    keyExtractor={(item) => item._id}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
                />
            )}
            <Fab onPress={() => setShowModalInput(true)} bottom={60} />
            <ModalInput
                loading={saving}
                visible={showModalInput}
                title={'Agregar Condición'}
                confirmButton={'Aceptar'}
                cancelButton={'Cancelar'}
                onConfirmPressed={(value) => handleAddCondition(value)}
                onCancelPressed={() => setShowModalInput(false)}
            />
        </Container>
    );
};

export default ConditionsScreen;

const styles = StyleSheet.create({
    containerInformation: {
        width: '94%',
        backgroundColor: colors.light.primaryLight,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: size.XXL,
        paddingVertical: size.XXL,
        borderLeftWidth: 8,
        borderLeftColor: colors.light.primary,
        marginBottom: size.XL,
    },
    textInformation: {
        fontWeight: '600',
        color: colors.light.black,
    },
    conditionItem: {
        marginHorizontal: size.XXL,
        marginVertical: size.XL,
        flexDirection: 'row',
        borderBottomColor: colors.light.grey,
        borderBottomWidth: 1,
        paddingBottom: size.L,
    },
    textItem: {
        alignSelf: 'center',
        marginLeft: size.XXL,
    },
    color: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 30,
    },
});
