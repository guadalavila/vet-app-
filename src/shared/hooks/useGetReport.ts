import { useEffect, useState } from 'react';
import reportServices from '~services/ReportServices';
import useAuth from './useAuth';
import { Report } from '~models/Report';
import useError from './useError';

const useGetReport = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState<Report>();
    const { setErrorApp } = useError();

    useEffect(() => {
        getReport();
    }, []);

    const getReport = () => {
        try {
            const vetId = user?.vetId ? user.vetId._id : undefined;
            if (vetId) {
                reportServices.getReport(vetId).then((res) => {
                    setReport(res);
                    setLoading(false);
                });
            }
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener Reporte: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    return { loading, ...report };
};

export default useGetReport;
