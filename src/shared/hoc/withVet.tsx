import React from 'react';
import useAuth from '../hooks/useAuth';
import Container from '../components/Container';
import NoData from '../components/NoData';
import Button from '../components/Button';
import Loading from '../components/Loading';

function withVet(Component: React.FC<any>) {
    return (props: any) => {
        const { user, isLoading, getMe, logout } = useAuth();

        if (!user?.vetId) {
            return (
                <Container>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <NoData
                            showIcon={false}
                            title={`${user?.name} no tenes asociada una veterinaria`}
                            subtitle='Contacta con tu administrador para poder ingresar a la app.'
                        />
                    )}
                    <Button title='Reintentar' onPress={getMe} />
                    <Button outlined title='Cerrar sesión' onPress={logout} />
                </Container>
            );
        }

        return (
            <Component {...props} /> // <-- pass props on
        );
    };
}

export default withVet;
