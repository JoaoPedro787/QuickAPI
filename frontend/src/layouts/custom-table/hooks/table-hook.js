import {useState} from "react";
import {DataFetchEffect} from './effects/data-fetch';

const TableHook = ()=>{
    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useState([]);

    // Effects
    DataFetchEffect(setLoading,setData);

    return({isLoading,data});
    
};

export {TableHook};