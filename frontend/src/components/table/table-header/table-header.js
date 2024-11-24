import React, { useRef } from "react";
import { columnData } from "../../../data/table/table-body/column-data";
import { UseUncheckedBox } from '../../../hooks/table-components/table-header/checkbox-effect';

const TableHeader = ({ isChecked }) => {
    const { setCheckBox, allCheckBoxes } = isChecked;

    const checkBoxRef = useRef(null);

    // Effect
    UseUncheckedBox(checkBoxRef,allCheckBoxes);

    const setAllTrue = () => {
        return setCheckBox(() => allCheckBoxes.map(() => checkBoxRef.current.checked));
    };

    return (
        <tr
            className="bg-gray-200"
        >
            <th>
                <input
                    type="checkbox"
                    className="size-6"
                    ref={checkBoxRef}
                    onChange={() => setAllTrue()}
                />
            </th>

            {columnData.map((el) => (
                <th
                    className={`${el.style}`}
                    key={el.id}
                >
                    {el.value}
                </th>
            ))}
        </tr>
    );
};

export { TableHeader };