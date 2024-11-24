// API
import { to } from '../../../utils/async-promise';
import { UpdateUser, DeleteUser } from "../../../services/user-service";

// Icons
import { FaPen, FaUserMinus } from 'react-icons/fa';

const HandleReq = (setRefresh) => {

    // Chamadas API
    const handleDelete = async (id) => {
        const { error } = await to(DeleteUser(id));

        return error ? (alert(error.message)) : (setRefresh(true));

    };

    const handleUpdate = async (id) => {
        const { error } = await to(UpdateUser(id));

        return error ? (alert(error.message)) : (setRefresh(true));

    };

    const actionsData = [
        { id: '0', icon: <FaPen className="text-yellow-500" />, function: handleUpdate },
        { id: '1', icon: <FaUserMinus className="text-red-500" />, function: handleDelete },
    ];

    return { actionsData };

}

export { HandleReq };