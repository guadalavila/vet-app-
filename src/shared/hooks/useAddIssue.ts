import { useState } from 'react';
import { Issue } from '~models/Issue';
import useError from './useError';
import issueServices from '~services/IssueService';

const useAddIssue = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createIssue = (issue: Issue) => {
        return new Promise<Issue>((resolve, reject) => {
            try {
                setLoading(true);
                issueServices.addIssue(issue).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear incidencia: Ocurrió un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
            }
        });
    };
    return { createIssue, loading };
};
export default useAddIssue;
