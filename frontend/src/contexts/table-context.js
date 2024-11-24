import { createContext } from "react";
import { TableHook } from "../hooks/table-context/table-hook";

const TableContext = createContext();

const TableProvider = ({ children }) => {
    const {InitialStates, CheckBoxStates, setRefresh} = TableHook();

    return (
        <TableContext.Provider value={{InitialStates,CheckBoxStates,setRefresh}}>
            {children}
        </TableContext.Provider>
    )
}

export { TableContext }
export default TableProvider;