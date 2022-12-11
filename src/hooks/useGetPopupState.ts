import {useEffect, useMemo, useState} from "react";
import {GET_PARAMS} from "../const/popups";
import useGetParameter  from "./popup/useGetParameter";
let timeout:any=null;
export default ()=>{
    const popupName = useGetParameter(GET_PARAMS.popup);
    const [mountedPopup, setMountedPopup] = useState<string | null>("");
    useEffect(() => {
        if (popupName) {
            timeout && clearTimeout(timeout);
            setMountedPopup(popupName);
        } else {
            timeout = setTimeout(() => {
                setMountedPopup(null);
            }, 500);
        }
    }, [popupName]);
    useEffect(() => {
        return () => {
            timeout && clearTimeout(timeout);
        };
    }, []);
    const isOpened = useMemo(() => Boolean(popupName), [popupName]);
    return{
        mountedPopup,
        isOpened
    }
}
