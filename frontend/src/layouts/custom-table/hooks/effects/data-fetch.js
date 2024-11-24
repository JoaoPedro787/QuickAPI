import { useEffect } from "react";
import { GetUsers } from '../../../../services/user-service';

const DataFetchEffect = (setLoading, setData) => {

    const asyncFetch = async () => {
        return await GetUsers()
            .then((response) => setData(response))
            .catch((err) => alert(err.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        asyncFetch();
    }, []);

};

export { DataFetchEffect };