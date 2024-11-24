import React, {useContext} from "react";

// Components
import { TableHeader } from "../../components/table/table-header/table-header";
import { TableBody } from "../../components/table/table-body/table-body";

// Context
import {TableContext} from '../../contexts/table-context'

const CustomTable = () => {
    const { InitialStates, CheckBoxStates, setRefresh } = useContext(TableContext);

    const { isLoading, data } = InitialStates;

    return (
        <table className="w-full table-auto border-collapse border-2">
            <thead>
                <TableHeader isChecked={CheckBoxStates} />
            </thead>

            {/* Adicionar skeleton e em vez de mensagem de erro adicionar uma div com texto */}

            <tbody>
                {!isLoading && <TableBody data={data} isChecked={CheckBoxStates} refreshPage={setRefresh} />}
            </tbody>
        </table>
    )
};

export { CustomTable };