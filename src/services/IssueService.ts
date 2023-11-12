import { Issue, IssueResponse } from '~models/Issue';
import { API_PATHS } from '~shared/utils/apiPaths';
import networkManager from '~shared/utils/axios/NetworkManager';
import { logCrash } from '~shared/utils/firebase/crashlytics';

class IssueServices {
    constructor() {}

    addIssue(issue: Issue): Promise<IssueResponse> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<IssueResponse>(API_PATHS.ISSUE, issue)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, 'IssueServices => addIssue()', 'POST');
                    reject(error);
                });
        });
    }
}
const issueServices = new IssueServices();
export default issueServices;
