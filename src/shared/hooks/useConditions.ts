import { useContext, useEffect, useState } from 'react';
import { Condition, NewCondition } from '../../models/Condition';
import conditionsServices from '../../services/ConditionsServices';
import { ConditionsContext } from '../../contexts/ConditionsContext';

const useConditions = () => {
    const [loading, setLoading] = useState(false);
    const [conditions, setConditions] = useState<Condition[] | []>([]);
    const [saving, setSaving] = useState(false);
    const { setConditionsApp } = useContext(ConditionsContext);

    useEffect(() => {
        getConditions();
    }, []);

    const getConditions = () => {
        setLoading(true);
        try {
            conditionsServices.getConditions().then((res) => {
                setConditions(res);
                setConditionsApp(res);
                setLoading(false);
            });
        } catch (error) {
            setLoading(false);
        }
    };

    const addCondition = (condition: NewCondition) => {
        return new Promise((resolve, reject) => {
            try {
                setSaving(true);
                conditionsServices.addCondition(condition).then((res) => {
                    resolve(res);
                    setSaving(false);
                });
            } catch (error) {
                reject(error);
                setSaving(false);
            }
        });
    };

    const refreshData = () => {
        getConditions();
    };

    return { conditions, loading, refreshData, addCondition, saving };
};

export default useConditions;
