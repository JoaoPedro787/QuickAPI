import React from "react";
import { columnData } from "./column-data";

const TableHeader = () => {
    return (
        <tr>
            {columnData.map((el) => (
                <th
                    className={`bg-gray-200 text-left ${el.style}`}
                    key={el.id}
                >
                    {el.value}
                </th>
            ))}
        </tr>
    );
};

export { TableHeader };