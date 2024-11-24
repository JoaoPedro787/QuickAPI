import api from './api';
import { to } from '../utils/async-promise';
import { responseHandler } from '../helpers/handle-api-request';

const GetUsers = async () => {
    const { error, data } = await to(api.get('/user'));

    return responseHandler(error, data);
};

export { GetUsers };