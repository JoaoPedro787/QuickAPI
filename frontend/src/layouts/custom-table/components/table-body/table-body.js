import React from "react";

import { actionsData } from "./actions-data";

const TableBody = ({ data }) => {
  return (
    <>
      {/* User info */}
      {data.map((el, rowIndex) => (
        <tr
          className="border-2"
          key={rowIndex}>

          {Object.values(el).map((item, colIndex) => (

            <td
              key={colIndex}>

              {item}

            </td>

          ))}

          {/* Actions */}
          <td className="flex justify-center gap-6">
            {actionsData.map((item, index) => (
              <span
                key={index}
                className="text-2xl cursor-pointer transition-all hover:scale-125 hover:-translate-y-1 hover:opacity-60"
              >

                {item.icon}

              </span>
            ))}
          </td>

        </tr>
      ))}
    </>
  );
};

export { TableBody };