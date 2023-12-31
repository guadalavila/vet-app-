import { useContext, useState } from 'react';
import { PathologiesContext } from '~contexts/PathologiesContext';
import pathologiesServices from '~services/PathologiesServices';
import useAuth from './useAuth';
import { NewPathology } from '~models/Pathology';
import useError from './useError';

const usePathologies = () => {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const { pathologies, setPathologies } = useContext(PathologiesContext);
    const { user } = useAuth();
    const { setErrorApp } = useError();

    const getPathologies = () => {
        setLoading(true);
        try {
            if (user?.vetId) {
                pathologiesServices.getPathologies(user?.vetId?._id).then((res) => {
                    setPathologies(res);
                    setLoading(false);
                });
            }
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener Patologias: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    const addPathology = (name: string, description?: string) => {
        return new Promise((resolve, reject) => {
            try {
                const newPathology: NewPathology = {
                    name: name,
                    description: description,
                    vetId: user?.vetId ? user.vetId._id : '',
                };
                setSaving(true);
                pathologiesServices.addPathology(newPathology).then((res) => {
                    resolve(res);
                    setSaving(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear Patologia: Ocurrió un error',
                    type: 'error',
                });
                reject(error);
                setSaving(false);
            }
        });
    };

    const refreshData = () => {
        getPathologies();
    };

    return { getPathologies, loading, refreshData, saving, pathologies, addPathology };
};

export default usePathologies;
