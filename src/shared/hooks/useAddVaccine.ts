import { useState } from 'react';
import vaccineServices from '../../services/VaccineServices';
import { NewVaccine, Vaccine } from '../../models/Vaccine';

const useAddVaccine = () => {
    const [loading, setLoading] = useState(false);

    const createVaccine = (vaccine: NewVaccine) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                vaccineServices.addVaccine(vaccine).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
                reject(error);
            }
        });
    };

    const updateVaccine = (vaccine: Vaccine) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                vaccineServices.updateVaccine(vaccine).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
                reject(error);
            }
        });
    };

    return { createVaccine, loading, updateVaccine };
};
export default useAddVaccine;
