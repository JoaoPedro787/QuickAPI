import { useState } from "react";
import { DataFetchEffect } from './effects/data-fetch';
import { HasData } from "./effects/has-data";
import { useRefreshPage } from "./effects/refresh-page";

const TableHook = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [allCheckBoxes, setCheckBox] = useState([]);
    const [refresh,setRefresh] = useState(true);

    // Effects
    DataFetchEffect(setLoading, setData, refresh);
    HasData(setCheckBox,data);
    useRefreshPage(refresh,setRefresh);

    // Objects
    const InitialStates = { isLoading, data };
    const CheckBoxStates = { allCheckBoxes, setCheckBox };

    return ({ InitialStates, CheckBoxStates, setRefresh });

};

export { TableHook };