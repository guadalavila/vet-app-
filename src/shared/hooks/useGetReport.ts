import { useEffect, useState } from 'react';
import reportServices from '../../services/ReportServices';
import useAuth from './useAuth';
import { Report } from '../../models/Report';

const useGetReport = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState<Report>();

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
            setLoading(false);
        }
    };

    return { loading, ...report };
};

export default useGetReport;
