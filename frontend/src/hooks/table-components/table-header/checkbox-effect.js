import { useEffect } from "react";

const UseUncheckedBox = (checkBoxRef, allCheckedBoxes) => {

    const isAll = () => {
        const allTrue = allCheckedBoxes.every((el) => el === true);
        const someTrue = allCheckedBoxes.some((el) => el === true);

        if (allCheckedBoxes.length === 0){
            return checkBoxRef.current.checked = false;
        };
        
        checkBoxRef.current.checked = allTrue;
        checkBoxRef.current.indeterminate = allTrue ? false : someTrue;
    };

    useEffect(() => {
        isAll();

    }, [allCheckedBoxes]);
}

export { UseUncheckedBox };