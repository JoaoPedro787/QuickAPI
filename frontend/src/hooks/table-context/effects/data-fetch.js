import { useEffect } from "react";
import { GetUsers } from '../../../services/user-service';

const DataFetchEffect = (setLoading, setData, refresh) => {

    const asyncFetch = async () => {
        return await GetUsers()
            .then((response) => setData(response))
            .catch((err) => {
                return setData([]);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (refresh) {
            asyncFetch();
        }
    }, [refresh]);

};

export { DataFetchEffect };