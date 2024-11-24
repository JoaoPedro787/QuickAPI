import React from "react";

// Components
import { Header } from "../header-dashboard/dashboard";
import { TableHeader } from "./components/table-header/table-header";
import { TableBody } from "./components/table-body/table-body";

// Hooks
import { TableHook } from './hooks/table-hook';

const CustomTable = () => {
    const { isLoading, data } = TableHook();

    return (
        <table className="w-full table-auto border-collapse border-2">
            <thead>
                <TableHeader />
            </thead>

            <tbody>
                {!isLoading && <TableBody data={data} />}
            </tbody>
        </table>
    )
};

export { CustomTable };