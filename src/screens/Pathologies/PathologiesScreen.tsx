import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import Fab from '~shared/components/Fab';
import CustomText from '~shared/components/CustomText';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import Loading from '~shared/components/Loading';
import ModalInput from '~shared/components/ModalInput';
import usePathologies from '~shared/hooks/usePathologies';
import NoData from '~shared/components/NoData';
import Banner from '~shared/components/Banner';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PathologiesScreen'> {}

const PathologiesScreen = ({}: Props) => {
    const { loading, refreshData, saving, addPathology, pathologies } = usePathologies();
    const [showModalInput, setShowModalInput] = useState(false);

    const onRefresh = useCallback(() => {
        refreshData();
    }, []);

    const handleAddPathology = (name: string) => {
        addPathology(name, '').then(() => {
            setShowModalInput(false);
            refreshData();
        });
    };

    return (
        <Container>
            <Header title='Patologías' buttonBack />
            <Banner text='En esta sección podrás administrar las patologías preexistentes de una mascota.' />
            {loading ? (
                <Loading />
            ) : (
                <>
                    {pathologies.length > 0 ? (
                        <FlatList
                            data={pathologies}
                            renderItem={({ item }) => (
                                <View style={styles.conditionItem}>
                                    <View style={[styles.color, { backgroundColor: item.colorCode }]} />
                                    <CustomText style={styles.textItem}>{item.name}</CustomText>
                                </View>
                            )}
                            keyExtractor={(item) => item._id}
                            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
                        />
                    ) : (
                        <NoData title='Todavía no hay patologías agregadas' showIcon />
                    )}
                </>
            )}
            <Fab onPress={() => setShowModalInput(true)} bottom={60} />
            <ModalInput
                loading={saving}
                visible={showModalInput}
                title={'Agregar Patología'}
                confirmButton={'Aceptar'}
                cancelButton={'Cancelar'}
                onConfirmPressed={(value) => handleAddPathology(value)}
                onCancelPressed={() => setShowModalInput(false)}
            />
        </Container>
    );
};

export default PathologiesScreen;

const styles = StyleSheet.create({
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
