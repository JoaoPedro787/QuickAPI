import { useEffect } from "react";

const HasData = (setCheckBox, data) => {

    useEffect(() => {
        if (data.length > 0) {
            return setCheckBox(()=>data.map(()=>false));
        };
    }, [data]);

};

export { HasData };