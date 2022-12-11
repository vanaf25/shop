import React from "react";
import {GET_ENUMS} from "../../const/popups";
import SignIn from "../SignIn/SignIn";
import useGetPopupState from "../../hooks/useGetPopupState";
import SignUp from "../SignUp/SignUp";



const popups = {
    [GET_ENUMS.popup.signIn]: SignIn,
    [GET_ENUMS.popup.signUp]:SignUp
};

const GetParameterPopups = () => {
    const { mountedPopup, isOpened } = useGetPopupState();
    const Component =mountedPopup && popups[mountedPopup];
    if (!Component) {
        return null;
    }
    return <Component isOpened={isOpened} />;
};

export default GetParameterPopups;
